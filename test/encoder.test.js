const encodeAndWriteToFile = require("../src/encoder")

test("Check file size 📂", async () => {

    const getBytes = await encodeAndWriteToFile()
    

    expect(getBytes.length).toEqual(246)

})