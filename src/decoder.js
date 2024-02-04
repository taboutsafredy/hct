const fs = require("node:fs/promises")
const path = require("path")
const binarySequence = require("./modules/getBinarySequence")
const writeDecompressedFile = require("./modules/writeDecompressedFile")


async function decodeTheBinarySequence (inputCompressedPath) {

    try {
        const getRootString = await fs.readFile(path.resolve(__dirname, '../save/root'), "utf8")
        const getRootOfHuffmanTree = JSON.parse(getRootString)
        const getBinarySequence = await binarySequence(inputCompressedPath)

        let decodedText = ""
        let currentNode = getRootOfHuffmanTree

        for (const bit of getBinarySequence) {
            currentNode = bit === "0" ? currentNode.left : currentNode.right

            if (currentNode.char !== null) {
                decodedText += currentNode.char
                currentNode = getRootOfHuffmanTree
            }
        }

        await writeDecompressedFile(decodedText, inputCompressedPath)

    } catch (error) {
        console.error(`🚨 Error in decodeTheBinarySequence :\n${error}`)
    }
}

module.exports = decodeTheBinarySequence