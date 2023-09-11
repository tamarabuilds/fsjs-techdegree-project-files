const word = "computer";
const index = Math.floor(Math.random() * word.length);
const letter = "b";

/**
  * Replaces a letter in a word
  * @param {string} string - Word being changed
  * @param {number} index - Index of letter to be replaced
  * @param {string} letter - letter to replace above letter with
  * @return {string} Word after letter has been replaced
  */
function replaceLetter(string, index, letter){
  const splitString = string.split("")
  splitString[index] = letter
  const newString = splitString.join('')

  return newString
}

console.log(replaceLetter(word, index, letter))