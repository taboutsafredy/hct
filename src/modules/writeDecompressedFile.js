const fs = require("node:fs/promises")
const path = require("path")

/**
 * write Decompressed File with .txt extension
 * 
 * @async
 * @function writeDecompressedFile
 * @param {string} decodedText
 * @param {string} inputCompressedPath
 * @param {string} ext
 */
async function writeDecompressedFile (decodedText, inputCompressedPath, ext) {
    
    try {
        let  getOriginalCompressedFileName = path.basename(inputCompressedPath, path.extname(inputCompressedPath))
        const outputDecompressedPath = path.resolve(process.cwd(), `${getOriginalCompressedFileName}.unhuff${ext}`)
        await fs.writeFile (outputDecompressedPath, decodedText)
    } catch (error) {
        console.error(`🚨 Error in writeDecompressedFile :\n ${error}`)
    }
}

module.exports = writeDecompressedFile