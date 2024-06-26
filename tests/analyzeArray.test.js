import { analyzeArray } from "../analyzeArray";

describe("the analyzeArray function", () => {
  it("should return an object with the the following properties: average, min, max, and length", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  it("should throw an error if array is empty", () => {
    expect(() => analyzeArray([])).toThrow();
  });
});
