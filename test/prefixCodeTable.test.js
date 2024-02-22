const prefixCodeTable = require("../src/prefixCodeTable")

test("Get prefix code for each char !!", async (testFilePath) => {
    
    const prefixCodes = await prefixCodeTable(testFilePath)
    expect(prefixCodes.t).toEqual("000")
    expect(prefixCodes.e).toEqual("011")
})