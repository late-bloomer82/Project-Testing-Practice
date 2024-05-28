export const calculator = {
  add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("You must enter a number");
    }
    return a + b;
  },

  substract(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("You must enter a number");
    }
    return a - b;
  },

  multiply(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("You must enter a number");
    }
    return a * b;
  },

  divide(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("You must enter a number");
    }
    if (b === 0) {
      throw new Error("a given number cannot be divided by 0");
    }

    return a / b;
  },
};
