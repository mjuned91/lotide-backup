const flatten = (arr) => {
  let flat = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flat.push(arr[i][j]);
      }
    } else {
      flat.push(arr[i]);
    }
  }
  console.log(flat);
};

flatten([1, 2, [3, 4], 5, [6]]);


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