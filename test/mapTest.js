const assert = require('chai').assert;
const map = require('../map');

describe("#map", () => {
  const words1 = ["ground", "control", "to", "major", "tom"];
  it("should return [ 'g', 'c', 't', 'm', 't' ] for (word => word[0])", () => {
    assert.deepEqual(map(words1, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]);
  });

  it("should return [ 'r', 'o', 'o', 'a', 'o' ] for (word => word[1])", () => {
    assert.deepEqual(map(words1, word => word[1]), [ 'r', 'o', 'o', 'a', 'o' ]);
  });

  const numbers = [1, 2, 3, 4, 5];
  it("should return [ 3, 4, 5, 6, 7 ] for (numbers, num => num + 2)", () => {
    assert.deepEqual(map(numbers, num => num + 2), [ 3, 4, 5, 6, 7 ]);
  });
});