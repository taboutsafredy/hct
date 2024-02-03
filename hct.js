const {program} = require("commander")
const encoder = require("./src/encoder")
const decoder = require("./src/decoder")

program
    .command("huff <filePath>")
    .description("Huff the text from the specific file")
    .action(async (filePath) => {
        await encoder(filePath)
    })


program
    .command("unhuff <filePath>")
    .description("UnHuff the specific huff file")
    .action(async (filePath) => {
        await decoder(filePath)
    })


program
    .parse(process.argv)