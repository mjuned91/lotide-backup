// Will take in two objects and return the appropriate message.

const eqObjects = function(object1, object2) {
  let objLength1 = Object.keys(object1).length
  let objLength2 = Object.keys(object2).length
  let objKeys1 = Object.keys(object1);
  if (objLength1 !== objLength2) {
    //console.log("Object lengths are not the same.");
    return false;
  }
  for (let key of objKeys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        if (object1[key].length !== object2[key].length) {
          //console.log("Array lengths are not the same.")
          return false;
        }
        
        for (let i = 0; i < (object1[key].length); i++) {
          if (object1[key][i] !== object2[key][i]) {
            //console.log("The values in the Array do not match.")
            return false;
          }
        };
    }
    else if (object1[key] === object2[key]) {
    } else {
      //console.log("The Objects do not match.");
      return false;
    }
  }
  //console.log("The Objects match.");
  return true;
};


const assertObjectsEqual = function(actual, expected) {
  const inspect = require("util").inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
      console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  };
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true