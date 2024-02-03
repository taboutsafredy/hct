const huffmanTree = require("../src/buildHuffTree")

test("Get huffman tree rancine 🌳", async () => {

    const testFilePath = "C:\\Users\\user\\Desktop\\go-CodingChallenges\\HuffmanCompressionTool\\examples\\text.tester.txt"
    const getRacine = await huffmanTree(testFilePath)
    expect(getRacine.freq).toEqual(448)
})