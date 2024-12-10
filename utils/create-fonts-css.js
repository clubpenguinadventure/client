const fs = require('fs');
const path = require('path');

// Input and output paths
const inputPath = './src/data/fonts.js'
const outputPath = './editor/plugins/fonts/fonts/fonts.css'

const window = { ASSETS_BASE_URL: 'https://media.cpadventure.net/' };

// Function to generate CSS for each font-face
function generateFontFace({ name, url, weight = 'normal', style = 'normal' }) {
    return `
@font-face {
    font-family: '${name}';
    src: url('${url}');
    font-weight: ${weight.trim()};
    font-style: ${style};
}
`.trim();
}

// Main function to process the fonts data
function generateCSS() {
    try {
        // Read the input file
        const inputFile = fs.readFileSync(inputPath, 'utf-8');

        // Extract the fonts array
        const fontsMatch = inputFile.match(/const fonts = (\[.*?\]);/s);
        if (!fontsMatch) {
            throw new Error('Fonts array not found in the input file.');
        }
        const fonts = eval(fontsMatch[1]); // Parse the fonts array

        // Generate CSS content
        const cssContent = fonts.map(generateFontFace).join('\n\n');

        // Write to the output file
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
        fs.writeFileSync(outputPath, cssContent, 'utf-8');

        console.log('CSS file generated successfully!');
    } catch (error) {
        console.error('Error generating CSS:', error.message);
    }
}

// Run the script
generateCSS();