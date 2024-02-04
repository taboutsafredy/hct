const fs = require("node:fs/promises")
const path = require("path")

/**
 * write Decompressed File with .txt extension
 * 
 * @async
 * @function writeDecompressedFile
 * @param {string} decodedText
 * @param {string} inputCompressedPath
 */
async function writeDecompressedFile (decodedText, inputCompressedPath) {
    
    try {
        let  getOriginalCompressedFileName = path.basename(inputCompressedPath, path.extname(inputCompressedPath))
        getOriginalCompressedFileName = getOriginalCompressedFileName.slice(0, -11)
        const outputPath = path.resolve(process.cwd(), `${getOriginalCompressedFileName}_decompressed.txt`)
        await fs.writeFile (outputPath, decodedText)
    } catch (error) {
        console.error(`🚨 Error in writeDecompressedFile :\n ${error}`)
    }
}

module.exports = writeDecompressedFile