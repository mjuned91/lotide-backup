//Helps us search for a key on an object where its value matches a given value.

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

const findKeyByValue = (object, value) => {
  let keyPack = Object.keys(object);
  for (let key of keyPack) {
    if (object[key] === value) {
      console.log(object[key]);
      return key;
      }
    }
};