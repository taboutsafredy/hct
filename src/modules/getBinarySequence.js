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

        let binarySequence = ""
        for (const byte of compressedFile) {
            binarySequence += ('00000000' + byte.toString(2)).slice(-8)
        }

        const randomBinaryString = binarySequence.slice(0, 8)
        const paddingFilePath =  path.resolve(__dirname, `../../.cache/${randomBinaryString}_padding`)
        const padding = parseInt(await fs.readFile(paddingFilePath, "utf8"))

        binarySequence = binarySequence.slice(8, binarySequence.length - padding)

        return {binarySequence, randomBinaryString}

    } catch (error) {
        console.error(`🚨 Error in getBinarySequence :\n ${error}`)
    }
}

module.exports = getBinarySequence