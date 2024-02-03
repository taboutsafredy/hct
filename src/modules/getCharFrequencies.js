const fs = require("node:fs/promises")

/**
 * get Frequencies by character
 * 
 * @async
 * @function getCharFrequencies
 * @param {string} getFilePath - file to compress path
 * @returns {Promise<Object>} - Frequence of each character
 */

async function getCharFrequencies (getFilePath) {
    try {

        const getText = await fs.readFile(getFilePath, "utf8")
        const frequencies = []
        for (const char of getText) {
            const charObject = frequencies.find(currentCharObjet => currentCharObjet.char === char)
            charObject ? charObject.freq++ : frequencies.push({ char: char, freq: 1 })
        }

        return frequencies
        
    } catch (error) {
        console.error(`🚨 Error in getCharFrequencies :\n ${error}`)
        return []
    }
}

module.exports = getCharFrequencies