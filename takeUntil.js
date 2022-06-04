//This function will return a "slice of the array with elements taken from the beginning".
//It should keep going until the callback returns a truthy value.

const takeUntil = (array, callback) => {
  const results = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i]) === true) {
      return results;
    } else {
      results.push(array[i]);
    }
  }
  return results;
};

/*
const takeUntil = function(array, callback) {
  const results = [];
  for (const item of array) {
    if (!callback(item)) {
      results.push(item);
    } else {
      return results;
    }
  }
  return results;
};
*/

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);