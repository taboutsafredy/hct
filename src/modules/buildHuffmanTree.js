const getCharFrequencies = require("./getCharFrequencies")

/**
 * Create a new Node for Huffman Tree
 * 
 * @class
 */
class Node {
    /** 
     * Create Node instance
     * 
     * @param {string} char - character
     * @param {number} freq - frequency
     * @param {object || null} left - left Node child
     * @param {object || null} right - right Node child
     * 
     */
    constructor(char, freq, left = null, right = null) {
        this.char = char,
        this.freq = freq,
        this.left = left,
        this.right = right
    }
}

/**
 * Build Huffman Tree from filePath
 * 
 * @async
 * @function buildHuffmanTree
 * @param {string} getFilePath - file to compress path
 * @returns {Promise<Object>} - The root of HuffmanTree
 */

async function buildHuffmanTree (getFilePath) {
    try { 
        const getFrequencies = await getCharFrequencies(getFilePath)
        const nodeStorageQueue = getFrequencies.map(({char, freq}) => new Node(char, freq))

        while (nodeStorageQueue.length > 1) {
            nodeStorageQueue.sort((a, b) => a.freq - b.freq)

            const left = nodeStorageQueue.shift()
            const right = nodeStorageQueue.shift()

            const currentParentNode = new Node(null, left.freq + right.freq, left, right)
    
            nodeStorageQueue.push(currentParentNode)
        }

        return nodeStorageQueue[0]

    } catch (error) {
        console.error(`🚨 Error in buildHuffmanTree :\n ${error}`)
    }
}

module.exports = buildHuffmanTree