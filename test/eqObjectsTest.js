const assert = require('chai').assert;
const eqObjects = require('../eqObjects');


describe("eqObjects", () => {
  const ab = { a: "1", b: "2" };
  const ba = { b: "2", a: "1" };
  const abc = { a: "1", b: "2", c: "3" };
  it("should return true for eqObjects(ab, ba)", () => {
    assert.strictEqual(eqObjects(ab, ba), true);
  });

  it("should return false for eqObjects(ab, abc)", () => {
    assert.strictEqual(eqObjects(ab, abc), false);
  });

  const cd = { c: "1", d: ["2", 3] };
  const dc = { d: ["2", 3], c: "1" };
  const cd2 = { c: "1", d: ["2", 3, 4] };
  it("should return true for eqObjects(cd, dc)", () => {
    assert.strictEqual(eqObjects(cd, dc), true);
  });

  it("should return false for eqObjects(cd, cd2)", () => {
    assert.deepEqual(eqObjects(cd, cd2), false);
  });
});