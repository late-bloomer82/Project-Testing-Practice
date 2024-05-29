import { caesarCipher } from "../caesarCipher";

describe("a caesar cipher function", () => {
  it("should take a string a apply the caesar cipher on the string", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
  });

  it("should preserve case sensitivity", () => {
    expect(caesarCipher("aBc", 3)).toBe("dEf");
  });

  it("should preserve punctuations,whitespaces and non-alphabetic characters.", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
  });
});
