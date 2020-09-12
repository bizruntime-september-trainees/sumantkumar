var string = require("./string");

test("string are match", () => {
    expect(string()).toMatch("hello");
});