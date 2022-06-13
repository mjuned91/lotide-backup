// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

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

module.exports = eqObjects;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false