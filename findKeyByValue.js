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