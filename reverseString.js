export function reverseString(input) {
  if (input.length === 0) {
    throw new Error("input should not be empty");
  }

  if (input.length === 1) {
    throw new Error("input should be longer than 1 character");
  }
  const string = input.toString();
  let reverseString = "";
  for (let i = string.length - 1; i >= 0; i--) {
    let currentLetter = string[i];
    reverseString += currentLetter;
  }
  return reverseString;
}
