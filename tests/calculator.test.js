import { calculator } from "../calculator";

describe("a basic calculator with basic operations", () => {
  it("should return the result of adding two numbers together", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  it("should return the result of substracting two numbers together", () => {
    expect(calculator.substract(2, 1)).toBe(1);
  });

  it("should return the result of multiplying two numbers together", () => {
    expect(calculator.multiply(2, 2)).toBe(4);
  });

  it("should return the result of dividing two numbers together", () => {
    expect(calculator.divide(2, 2)).toBe(1);
  });

  it("should throw an error if a given number is divided by 0", () => {
    expect(() => calculator.divide(2, 0)).toThrow();
  });

  it("should throw an error if the wrong data type is entered", () => {
    Object.keys(calculator).forEach((method) => {
      expect(() => calculator[method](2, "s")).toThrow();
      expect(() => calculator[method]("s", 2)).toThrow();
    });
  });
});
