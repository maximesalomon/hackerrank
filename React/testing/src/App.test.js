const helper = require("./App");

describe("helper mobule", () => {
  describe("sum function", () => {
    it("can add two numbers", () => {
      const expectedOutput = 10;
      const actualOutput = helper.sum(5, 5);
      expect(actualOutput).toBe(expectedOutput);
    });
  });
});
