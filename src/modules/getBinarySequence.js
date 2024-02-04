const fs = require("node:fs/promises")
const path = require("path")

/**
 * Get Binary Sequence
 * 
 * @async
 * @function getBinarySequence
 * @param {string} inputCompressedPath - Compressed file path
 * @returns {Promise<string>} - Binary sequence of compressed file
 */

async function getBinarySequence (inputCompressedPath) {

    try {
        const compressedFile = await fs.readFile(inputCompressedPath)
        const paddingFilePath =  path.resolve(__dirname, "../../save/padding")
        let padding = parseInt(await fs.readFile(paddingFilePath, "utf8"))

        let binarySequence = ""
        for (const byte of compressedFile) {
            binarySequence += ('00000000' + byte.toString(2)).slice(-8)
        }

        binarySequence = binarySequence.slice(0, -padding)

        return binarySequence

    } catch (error) {
        console.error(`🚨 Error in getBinarySequence :\n ${error}`)
    }
}

module.exports = getBinarySequence