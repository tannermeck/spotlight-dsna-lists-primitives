const { reverseWords, titleCase, oddishOrEvenish } = require(".");

describe("reverseWords", () => {
  it("should reverse the words of a sentence", () => {
    expect(reverseWords("alchemy rocks gold")).toBe("ymehcla skcor dlog");
  });
  it("should capitalize the first letter of each word", () => {
    expect(titleCase("alchemy ROCKS goLD")).toBe("Alchemy Rocks Gold");
  });
  it("return odd or even", () => {
    expect(oddishOrEvenish("121")).toBe("Evenish");
    expect(oddishOrEvenish("41")).toBe("Oddish");
  });
});
