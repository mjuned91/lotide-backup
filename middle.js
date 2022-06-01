const middle = (arr) => {
  let newArr = [];
  if (arr.length < 3) {
    console.log(newArr);
  } else if (arr.length % 2 === 0) {
    let i = (arr.length / 2) - 1;
    let j = (arr.length / 2);
    newArr = [arr[i], arr[j]];
    console.log(newArr);
  } else {
    let i = ((arr.length - 1) / 2);
    newArr = [arr[i]];
    console.log(newArr);
  }
};

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