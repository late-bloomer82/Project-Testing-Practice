import { capitalize } from "../capitalize";

describe("capitalizes the first letter of a string", () => {
  it("should capitalize the first letter of the string", () => {
    expect(capitalize("hi")).toBe("Hi");
  });

  it("should throw a specific error message if the string is empty", () => {
    expect(() => capitalize("")).toThrow(/^you must enter a string$/);
  });

  it("should throw an error if the first digit is a number", () => {
    expect(() => capitalize("2dog")).toThrow();
  });
});
