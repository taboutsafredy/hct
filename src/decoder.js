const fs = require("node:fs/promises")
const path = require("path")
const getBinarySequence = require("./modules/getBinarySequence")
const writeDecompressedFile = require("./modules/writeDecompressedFile")


async function decodeTheBinarySequence (inputCompressedPath) {

    try {
        
        const {binarySequence, randomBinaryString} = await getBinarySequence(inputCompressedPath)
        const getRootString = await fs.readFile(path.resolve(__dirname, `../save/${randomBinaryString}_root`), "utf8")
        const getRootOfHuffmanTree = JSON.parse(getRootString)

        let decodedText = ""
        let currentNode = getRootOfHuffmanTree

        for (const bit of binarySequence) {
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

const tst  = "C:\\Users\\user\\Desktop\\go-CodingChallenges\\HuffmanCompressionTool\\src\\lesMiserables_compressed.huff"
decodeTheBinarySequence(tst)

module.exports = decodeTheBinarySequence