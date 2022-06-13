const eqArrays = require('./eqArrays');

const assertArraysEqual = (arr1, arr2) => {
/*
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
*/
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  };
}

assertArraysEqual([1, 2, 3], [1, 2, 3]);

module.exports = assertArraysEqual;