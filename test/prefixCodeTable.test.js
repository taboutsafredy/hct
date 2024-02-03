const prefixCodeTable = require("../src/prefixCodeTable")

test("Get prefix code for each char !!", async () => {
    
    const testFilePath = "C:\\Users\\user\\Desktop\\go-CodingChallenges\\HuffmanCompressionTool\\examples\\text.tester.txt"

    const prefixCodes = await prefixCodeTable(testFilePath)
    expect(prefixCodes.t).toEqual("000")
    expect(prefixCodes.e).toEqual("011")
})