export function analyzeArray(numbersArray) {
  if (numbersArray.length === 0) {
    throw new Error("array cannot be empty");
  }
  const average = () => {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
      const currentNumber = numbersArray[i];
      sum += currentNumber;
    }
    return sum / numbersArray.length;
  };

  const min = () => {
    return Math.min(...numbersArray);
  };

  const max = () => {
    return Math.max(...numbersArray);
  };

  const length = () => {
    return numbersArray.length;
  };

  return {
    average: average(),
    min: min(),
    max: max(),
    length: length(),
  };
}
