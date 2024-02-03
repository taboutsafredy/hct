const fs = require("node:fs/promises")
const path = require("path")

/**
 * write Decompressed File with .txt extension
 * 
 * @async
 * @function writeDecompressedFile
 * @param {string} decodedText 
 */
async function writeDecompressedFile (decodedText) {
    
    try {
        const outputPath = path.resolve(__dirname, "../../decompressed/decompressed_file.txt");
        await fs.writeFile (outputPath, decodedText)
    } catch (error) {
        console.error(`🚨 Error in writeDecompressedFile :\n ${error}`)
    }
}

module.exports = writeDecompressedFile