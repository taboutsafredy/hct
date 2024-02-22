const fs = require("node:fs")
const path = require("path")
const huffmanTree = require("./buildHuffmanTree")

/**
 * Generate Prefix Code Table
 * 
 * @async
 * @function generatePrefixCodeTable
 * @param {string} getFilePath file to compress path
 * @returns {Promise<Object>} - The prefix code table of Huffman Tree
 */

async function generatePrefixCodeTable (getFilePath) {
    try {
        const root = await huffmanTree(getFilePath)

        /**
         * Generate random binary sequence with length for decoding
         * @returns {string} arrayRandomSerieToString used for decoding 
         */
        function generateRandomSerie () {
            try {
                const arrayRandomSerie = []
                for (let i = 0; i < 8; i++) {
                    const bit = Math.round(Math.random())
                    arrayRandomSerie.push(bit)
                }

                const arrayRandomSerieToString = arrayRandomSerie.join("")

                return arrayRandomSerieToString
            } catch (error) {
                console.error(`🚨 Error in generateRandomSerie :\n ${error}`)
            }
        }
        const randomBinaryString = generateRandomSerie()


        /**
         * Externalization of Huffman Tree
         * @returns {boolean} true
         */
        function saveRootOfHuffmanTree () {
            try {
                fs.writeFileSync(path.resolve(__dirname, `../../.cache/${randomBinaryString}_root`), JSON.stringify(root))
                return true
            } catch (error) {
                console.error(`🚨 Error in saveRootOfHuffmanTree :\n ${error}`)
            }
        }

        const prefixCodeTable = {}
        const nodeQueue = [{node: root, code:''}]

        while(nodeQueue.length > 0) {

            const {node, code} = nodeQueue.shift()

            if(!node.left && !node.right) {
                prefixCodeTable[node.char] = code
            }

            if(node.left) {
                nodeQueue.push({node: node.left, code: code + '0'})
            }

            if(node.right) {
                nodeQueue.push({node: node.right, code: code + '1'})
            }
        }

        saveRootOfHuffmanTree()
        return {prefixCodeTable, randomBinaryString}
        
    } catch (error) {
        console.error(`🚨 Error in generatePrefixCodeTable :\n ${error}`)
    }

}

module.exports = generatePrefixCodeTable