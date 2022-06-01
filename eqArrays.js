const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

eqArrays([1, 2, 3], [1, 2, 3]);
eqArrays([1, 2, 3], [3, 2, 1]);
eqArrays(["1", "2", "3"], ["1", "2", "3"]);
eqArrays(["1", "2", "3"], ["1", "2", 3]);
//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);