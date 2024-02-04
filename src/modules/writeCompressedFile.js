const fs = require("node:fs/promises")
const path = require("path");

/**
 * write Compressed File with .huff extension
 * 
 * @async 
 * @function writeCompressedFile
 * @param {buffer} encodedBuffer - encoded Buffer
 */

async function writeCompressedFile(encodedBuffer, getFilePath) {

  try {
    const getOriginalFileName = path.basename(getFilePath, path.extname(getFilePath))
    const outputCompressedPath = path.resolve(__dirname, `${getOriginalFileName}_compressed.huff`)
    await fs.writeFile(outputCompressedPath, encodedBuffer);
  } catch (error) {
    console.error(`🚨 Error in writeCompressedFile :\n ${error}`)
  }
  
}


module.exports = writeCompressedFile