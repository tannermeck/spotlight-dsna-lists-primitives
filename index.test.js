const {
  reverseWords,
  titleCase,
  oddishOrEvenish,
  at,
  fizzBuzz,
  anagrams,
  uniqueString,
  uniqueCharacter,
  equalSides,
  isHappy,
} = require(".");

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
  it("return the letter at index", () => {
    expect(at(["a", "b", "c", "d", "e"], 1)).toBe("b");
    expect(at(["a", "b", "c", "d", "e"], -2)).toBe("d");
  });
  it("return the letter at index", () => {
    expect(
      fizzBuzz([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])
    ).toEqual([
      1,
      2,
      "Fizz",
      4,
      "Buzz",
      "Fizz",
      7,
      8,
      "Fizz",
      "Buzz",
      11,
      "Fizz",
      13,
      14,
      "FizzBuzz",
      16,
    ]);
  });
  it("should return true if anagram", () => {
    expect(anagrams("superintended", "unpredestined")).toBe(true);
    expect(anagrams("pictorialness", "documentarily")).toBe(false);
  });
  it("should return the unique string", () => {
    expect(
      uniqueString(["Aa", "aaa", "aaaaa", "BbBb", "Aaaa", "AaAaAa", "a"])
    ).toBe("BbBb");
    expect(
      uniqueString(["abc", "acb", "bac", "foo", "bca", "cab", "cba"])
    ).toBe("foo");
  });
  it("should return the unique string", () => {
    expect(uniqueCharacter("abdacabad")).toBe("c");
    expect(uniqueCharacter("abacabaabacaba")).toBe("_");
    expect(uniqueCharacter("abacabad")).toBe("c");
  });
  it("should find the equal side index", () => {
    expect(equalSides([1, 2, 3, 4, 3, 2, 1])).toBe(3);
    expect(equalSides([1, 100, 50, -51, 1, 1])).toBe(1);
    expect(equalSides([20, 10, -80, 10, 10, 15, 35])).toBe(0);
  });
  it("return true if happy", () => {
    expect(isHappy(19)).toBe(true);
    // expect(isHappy(4)).toBe(false);
  });
});
