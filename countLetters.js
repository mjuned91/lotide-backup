//Takes in a sentence (as a string) and then return a count of each of the letters in that sentence.

/*
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
*/

const countLetters = (string) => {
  let counter = {};
  for (let letter of string) {
    if (letter !== " ") {
      if (counter[letter]) {
        counter[letter] += 1;
      } else {
        counter[letter] = 1;
      }
    } 
  }
  return counter;
};

console.log(countLetters("lighthouse in the house"));