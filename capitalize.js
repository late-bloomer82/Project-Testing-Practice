export function capitalize(string) {
  const newString = string.toString();
  if (newString.length === 0) {
    throw new Error("you must enter a string");
  }

  if (/^\d/.test(newString)) {
    throw new Error("Your first character cannot be a number");
  }
  const lettersAfterCapitalLetter = newString.substring(1);
  return newString.charAt(0).toUpperCase() + lettersAfterCapitalLetter;
}
