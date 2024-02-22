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
        const {prefixCodeTable, randomBinaryString} = await generatePrefixCodeTable(getFilePath)

        let binarySequence = getText.split("").map(char => prefixCodeTable[char]).join("")
        let padding = 0
        while (binarySequence.length % 8 !== 0) {
            binarySequence += "0"
            padding += 1
        }

        const rBC = parseInt(randomBinaryString, 2) //rBC for randomBinaryConvertion
        const bytes = [rBC]
        for (let i = 0; i < binarySequence.length; i += 8) {
            bytes.push(parseInt(binarySequence.slice(i, i + 8), 2))
        }

        const encodedBuffer = Buffer.from(bytes)

        await fs.writeFile(path.resolve(__dirname, `../.cache/${randomBinaryString}_padding`), padding.toString())
        await fs.writeFile(path.resolve(__dirname, `../.cache/${randomBinaryString}_ext`), path.extname(getFilePath))
        await writeCompressedFile(encodedBuffer, getFilePath)

    } catch (error) {
        console.error(`🚨 Error in ecodeTheText :\n ${error}`)
    }
}

module.exports = encodeTheText
