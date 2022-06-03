/*
const assertArraysEqual = (arr1, arr2) => {

  const eqArrays = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
      console.log(false);
      return;
    }
    
    let ans = true;
    for (let i = 0; i < (arr1.length); i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(false);
        return;
      }
    }
    console.log(ans);
    return ans;
  };

  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  };
}
*/

const letterPositions = function(sentence) {
  const results = {};
  for (i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      let letter = sentence[i];
      if (!results[letter]) {
        results[letter] = [i];
      } else if (results[letter]) {
        results[letter].push(i);
      }
    }
  }
  return results;
};
console.log(letterPositions("lighthouse in the house"));