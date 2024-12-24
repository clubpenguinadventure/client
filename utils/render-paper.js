const fs = require('fs').promises;
const { DOMParser, XMLSerializer } = require('xmldom');
const { exec } = require('child_process');
const util = require('util');
const sharp = require('sharp');

const MAX_CONCURRENT = 10;

const execAsync = util.promisify(exec);

// Paths
const ffdecPath = `"utils/bin/FFDec/ffdec.bat"`
const ruffleExporterPath = `"utils/bin/Ruffle/exporter.exe"`;
const dirPath = process.argv[2];
const scale = process.argv[3] || 2;

// Helper function to wait for `exec`
async function runCommand(command) {
    try {
        const { stdout, stderr } = await execAsync(command);
        console.log(stdout);
        if (stderr) {
            console.error(stderr);
        }
    } catch (error) {
        console.error('Error executing command:', error);
        throw error;
    }
}

// Main process for a single SWF file
async function processSwfFile(swf) {
    if (!await fs.stat(swf).catch(() => false)) {
        console.error(`File not found: ${swf}`);
        return;
    }

    try {
        if (!await fs.stat(`tmp_paper_@${scale}x_${swf.split("/").pop().replaceAll(".", "_")}`).catch(() => false)) {
            await fs.mkdir(`tmp_paper_@${scale}x_${swf.split("/").pop().replaceAll(".", "_")}`);
        }

        console.log(`Processing file: ${swf}`);

        // Export SWF to XML
        console.log('Exporting SWF to XML...');
        await runCommand(`${ffdecPath} -swf2xml "${swf}" tmp_paper_@${scale}x_${swf.split("/").pop().replaceAll(".", "_")}/temp.xml`);
        console.log('SWF exported to XML');

        // Read and modify XML
        console.log('Reading and modifying XML...');
        const data = await fs.readFile(`tmp_paper_@${scale}x_${swf.split("/").pop().replaceAll(".", "_")}/temp.xml`, 'utf8');
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'text/xml');

        // Find all PlaceObject2Tag items on the stage
        const items = Array.from(xmlDoc.getElementsByTagName('item')).filter(item => {
            if (!Object.values(item.attributes).some(attr => attr.value === "PlaceObject2Tag")) return false
            if (item.parentNode.tagName != 'tags') return false
            return true
        });

        for (const item of items) {
            const matrix = item.getElementsByTagName('matrix')[0];
            if (matrix) {
                const translateX = matrix.getAttribute('translateX');
                const translateY = matrix.getAttribute('translateY');

                // Increment translateX and translateY by 150

                matrix.setAttribute('translateX', parseInt(translateX) + 150 * 20);
                matrix.setAttribute('translateY', parseInt(translateY) + 150 * 20);
            }
        }


        // Resize stage to correct size
        const stage = Array.from(xmlDoc.getElementsByTagName('displayRect')).filter(item => item.parentNode.tagName === 'swf')[0];
        const xMin = stage.getAttribute('Xmin');
        const yMin = stage.getAttribute('Ymin');

        stage.setAttribute('Xmax', parseInt(xMin) + 300 * 20);
        stage.setAttribute('Ymax', parseInt(yMin) + 300 * 20);

        // Save modified XML
        const serializer = new XMLSerializer();
        const modifiedXml = serializer.serializeToString(xmlDoc);
        await fs.writeFile(`tmp_paper_@${scale}x_${swf.split("/").pop().replaceAll(".", "_")}/modified.xml`, modifiedXml, 'utf8');
        console.log('Modified XML saved as modified.xml');

        // Convert modified XML back to SWF
        console.log('Exporting XML to SWF...');
        await runCommand(`${ffdecPath} -xml2swf tmp_paper_@${scale}x_${swf.split("/").pop().replaceAll(".", "_")}/modified.xml tmp_paper_@${scale}x_${swf.split("/").pop().replaceAll(".", "_")}/modified.swf`);
        console.log('XML exported to SWF');

        if (!await fs.stat(`exported/paper_@${scale}x`).catch(() => false)) {
            await fs.mkdir(`exported/paper_@${scale}x`, { recursive: true });
        }

        // Export frames (Super sampling by 2x)
        console.log('Exporting frames...');
        await runCommand(`${ruffleExporterPath} --scale ${scale * 2} -- tmp_paper_@${scale}x_${swf.split("/").pop().replaceAll(".", "_")}/modified.swf tmp_paper_@${scale}x_${swf.split("/").pop().replaceAll(".", "_")}/img.png`);
        console.log('Frames exported');

        // Rescale to correct size
        console.log('Rescaling frames...');
        await sharp(`tmp_paper_@${scale}x_${swf.split("/").pop().replaceAll(".", "_")}/img.png`)
            .resize(300*scale, 300*scale, { kernel: sharp.kernel.lanczos2 })
            .toFile(`exported/paper_@${scale}x/${swf.split("/").pop().replace(".swf", "")}.png`);

        // Clean up temporary files
        console.log('Deleting temporary files...');
        await fs.rm(`tmp_paper_@${scale}x_${swf.split("/").pop().replaceAll(".", "_")}/`, { recursive: true, force: true });
        console.log('Temporary files deleted');

    } catch (error) {
        console.error(`Error processing file ${swf}:`, error);
    }
}

// Main function to process either a single file or all SWF files in a directory
(async () => {
    try {
        // Check if the path is a file or directory
        const stats = await fs.stat(dirPath);

        if (stats.isFile() && dirPath.endsWith('.swf')) {
            // Process single SWF file
            console.log(`Processing single file: ${dirPath}`);
            await processSwfFile(dirPath);
            console.log('Single file processed successfully');
        } else if (stats.isDirectory()) {
            // Process all SWF files in the directory
            const files = await fs.readdir(dirPath);
            const swfFiles = files.filter(file => file.endsWith('.swf'));

            if (swfFiles.length === 0) {
                console.log('No SWF files found in the directory.');
                return;
            }

            let remainingFiles = swfFiles;
            while (remainingFiles.length > 0) {
                remainingFiles = await runSimultaneous(remainingFiles);
            }

            console.log('All files processed successfully');
        } else {
            console.error('Provided path is neither a valid SWF file nor a directory.');
        }
    } catch (error) {
        console.error('Error processing path:', error);
    }
})();

async function runSimultaneous(array) {
    const promises = [];
    for (let i = 0; i < MAX_CONCURRENT; i++) {
        promises.push(processSwfFile(`${dirPath}/${array[i]}`));
    }
    await Promise.all(promises);
    return array.slice(MAX_CONCURRENT);
}