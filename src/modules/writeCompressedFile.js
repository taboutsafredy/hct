const fs = require("node:fs/promises")
const path = require("path");

/**
 * write Compressed File with .huff extension
 * 
 * @async 
 * @function writeCompressedFile
 * @param {buffer} encodedBuffer - encoded Buffer
 * @param {string} getFilePath - Original filepath for get his name
 */

async function writeCompressedFile(encodedBuffer, getFilePath) {

  try {
    const getOriginalFileName = path.basename(getFilePath, path.extname(getFilePath))
    const outputCompressedPath = path.resolve(process.cwd(), `${getOriginalFileName}.huff`)
    await fs.writeFile(outputCompressedPath, encodedBuffer);
  } catch (error) {
    console.error(`🚨 Error in writeCompressedFile :\n ${error}`)
  }
  
}


module.exports = writeCompressedFile