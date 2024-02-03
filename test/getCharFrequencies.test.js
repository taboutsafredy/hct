const getCharFrequencies = require("../src/getCharFrequencies")

test("Get frequencies by char 💱", async () => {

    const testFilePath = "C:\\Users\\user\\Desktop\\go-CodingChallenges\\HuffmanCompressionTool\\examples\\text.tester.txt"

    const frequencies = await getCharFrequencies(testFilePath)
    expect(frequencies[0]).toEqual({char: "T", freq: 1})
})