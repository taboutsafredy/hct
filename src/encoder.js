const fs = require("node:fs/promises")
const path = require("path")
const generatePrefixCodeTable = require("./modules/prefixCodeTable")
const writeCompressedFile = require("./modules/writeCompressedFile")

/**
 * encode The Text
 * 
 * @async
 * @function encodeTheText
 * @param {string} getFilePath - file to compress path
 */
async function encodeTheText (getFilePath) {

    try {
        const getText = await fs.readFile(getFilePath, "utf8")
        const getPrefixCodeTable = await generatePrefixCodeTable(getFilePath)

        let binarySequence = getText.split("").map(char => getPrefixCodeTable[char]).join("")
        let padding = 0
        while (binarySequence.length % 8 !== 0) {
            binarySequence += "0"
            padding += 1
        }

        const bytes = []
        for (let i = 0; i < binarySequence.length; i += 8) {
            bytes.push(parseInt(binarySequence.slice(i, i + 8), 2))
        }

        const encodedBuffer = Buffer.from(bytes)
        await fs.writeFile(path.resolve(__dirname, "../save/padding"), padding.toString())
        await writeCompressedFile(encodedBuffer, getFilePath)

    } catch (error) {
        console.error(`🚨 Error in ecodeTheText :\n ${error}`)
    }
}

module.exports = encodeTheText