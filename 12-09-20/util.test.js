var util = require("./util.js");

test("add two number", function() {
    var result = util.sum(2, 4);
    var expected = 6;
    expect(result).toBe(expected);
});