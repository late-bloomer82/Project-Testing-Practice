export function caesarCipher(string, shiftFactor) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let caesarCipher = "";

  //Looping through each character in the string
  for (let i = 0; i < string.length; i++) {
    let currentCharacter = string[i];
    //Case for whitespaces
    if (/\s/.test(currentCharacter)) {
      caesarCipher += " ";
    }
    //Case for punctuation and non-alphabetical characters
    else if (/[^a-zA-Z]/.test(currentCharacter)) {
      caesarCipher += currentCharacter;
    }
    //If current character not a whitespace or a non-alphabetical character, proceed with the ciphering for normal alphabetical characters
    else {
      //Looping through the alphabet string to match the current letter with its index in the alphabet
      for (
        let alphabetIndex = 0;
        alphabetIndex < alphabet.length;
        alphabetIndex++
      ) {
        if (currentCharacter.toLowerCase() === alphabet[alphabetIndex]) {
          let letterIndex = alphabet.indexOf(alphabet[alphabetIndex]);
          //Looping shiftFactor amount of times to find the index of the shifted letter
          for (let z = 0; z < shiftFactor; z++) {
            if (letterIndex === 25) {
              letterIndex = 0;
            } else {
              letterIndex++;
            }
          }
          const shiftedLetter = alphabet[letterIndex];
          //Case for lower case characters
          if (currentCharacter.toLowerCase() === currentCharacter) {
            caesarCipher += shiftedLetter;
          }

          //Case for upper case characters
          else {
            caesarCipher += shiftedLetter.toUpperCase();
          }
        }
      }
    }
  }
  return caesarCipher;
}

//Time complexity kinda sucks but I wasn't aware of the includes method prior to writing this so..
//Code can be optimized in terms of time complexity and code clarity, buuuuuuuuuuuuuuuuuuuuuut im a little lazy.
