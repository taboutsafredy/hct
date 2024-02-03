const fs = require("node:fs/promises")
const path = require("path");

/**
 * write Compressed File with .huff extension
 * 
 * @async 
 * @function writeCompressedFile
 * @param {buffer} encodedBuffer - encoded Buffer
 */

async function writeCompressedFile(encodedBuffer) {

  try {
    const outputPath = path.resolve(__dirname, "../../compressed/compressed_file.huff")
    await fs.writeFile(outputPath, encodedBuffer);
  } catch (error) {
    console.error(`🚨 Error in writeCompressedFile :\n ${error}`)
  }
  
}


module.exports = writeCompressedFile