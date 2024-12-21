const fs = require('fs').promises;
const { DOMParser, XMLSerializer } = require('xmldom');
const { exec } = require('child_process');
const util = require('util');
const sharp = require('sharp');

const execAsync = util.promisify(exec);

// Paths
const ffdecPath = `"C:/Program Files (x86)/FFDec/ffdec.bat"`;
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
    try {
        console.log(`Processing file: ${swf}`);

        // Export SWF to XML
        console.log('Exporting SWF to XML...');
        await runCommand(`${ffdecPath} -swf2xml "${swf}" temp.xml`);
        console.log('SWF exported to XML');

        // Read and modify XML
        console.log('Reading and modifying XML...');
        const data = await fs.readFile('temp.xml', 'utf8');
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

                // Increment translateX and translateY by 30

                if (translateX == 5 && translateY == 5) { // Manually account for my bad positioning of flag masks
                    matrix.setAttribute('translateX', 15 + 30 * 20);
                    matrix.setAttribute('translateY', 15 + 30 * 20);
                } else {
                    matrix.setAttribute('translateX', parseInt(translateX) + 30 * 20);
                    matrix.setAttribute('translateY', parseInt(translateY) + 30 * 20);
                }
            }
        }

        // Save modified XML
        const serializer = new XMLSerializer();
        const modifiedXml = serializer.serializeToString(xmlDoc);
        await fs.writeFile('modified.xml', modifiedXml, 'utf8');
        console.log('Modified XML saved as modified.xml');

        // Convert modified XML back to SWF
        console.log('Exporting XML to SWF...');
        await runCommand(`${ffdecPath} -xml2swf modified.xml modified.swf`);
        console.log('XML exported to SWF');

        // Export frames
        console.log('Exporting frames...');
        await runCommand(`${ffdecPath} -ignorebackground -zoom ${scale} -export frame . modified.swf`);
        console.log('Frames exported');

        if (!await fs.stat('exported').catch(() => false)) {
            await fs.mkdir('exported');
        }

        // Crop to top left corner (60*scale x 60*scale)
        const image = sharp('1.png');
        await image.extract({ left: 0, top: 0, width: 60 * scale, height: 60 * scale })
            .toFile(`exported/${swf.split("/").pop().replace(".swf", "")}.png`);
        console.log('Image cropped to top left corner');

        // Clean up temporary files
        console.log('Deleting temporary files...');
        await fs.unlink('temp.xml');
        await fs.unlink('modified.xml');
        await fs.unlink('modified.swf');
        await fs.unlink('1.png');
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

            for (const swf of swfFiles) {
                await processSwfFile(`${dirPath}/${swf}`);
            }

            console.log('All files processed successfully');
        } else {
            console.error('Provided path is neither a valid SWF file nor a directory.');
        }
    } catch (error) {
        console.error('Error processing path:', error);
    }
})();
