import { reverseString } from "../reverseString";

describe("a function that takes a string and reverses it", () => {
  it("should reverse the inputted string", () => {
    expect(reverseString("Hello")).toBe("olleH");
  });

  it("should throw an error if the string is empty", () => {
    expect(() => reverseString("")).toThrow();
  });

  it("should throw an error if the string is 1 character", () => {
    expect(() => reverseString("d")).toThrow();
  });
});
