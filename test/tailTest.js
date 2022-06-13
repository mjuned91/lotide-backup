const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 2 for result.length", () => {
    const result = ["Hello", "Lighthouse", "Labs"];

    assert.strictEqual(tail(result).length, 2);
  });

  it("returns 'Lighthouse' for result[0]", () => {
    const result = ["Hello", "Lighthouse", "Labs"];

    assert.strictEqual(tail(result)[0], "Lighthouse");
  });

  it("returns 'Labs' for result[1]", () => {
    const result = ["Hello", "Lighthouse", "Labs"];

    assert.strictEqual(tail(result)[1], "Labs");
  });

  it("returns ['Lighthouse', 'Labs'] for tail(words)", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];

    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });
});