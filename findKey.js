//Scans the object and returns the first key for which the callback returns a truthy value. 
//If no key is found, it returns undefined.

const findKey = (object, callback) => {
  //let keyPack = Object.keys(object);
  for(let key in object) {
    if (callback(object[key])) {
      return key;
      }
    }
    return undefined;
  /*
  for (let i = 0; i < keyPack.length; i++) {

    //console.log(keyPack[i]);
    //console.log(object[keyPack[i]]);
    //console.log(callback(object[keyPack[i]]));

    if (callback(object[keyPack[i]])) {
      return keyPack[i];
      }
    }
    return undefined;
    */
    
};

console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"
