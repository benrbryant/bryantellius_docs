import { getLetterCount } from "./letter-count";
import { expect } from "chai";

describe("getLetterCount - basic functionality", () => {
  it("returns an empty object when passed an empty string", () => {
    const expected = {};
    const actual = getLetterCount("");
    expect(actual).to.deep.equal(expected);
  });

  it("returns the correct letter count for input with only unique letters", () => {
    const expected = { a: 1, b: 1, c: 1, d: 1 };
    const actual = getLetterCount("abcd");
    expect(actual).to.deep.equal(expected);
  });

  it("returns the correct letter count for input with only duplicate letters", () => {
    const expected = { h: 1, e: 1, l: 2, o: 1 };
    const actual = getLetterCount("hello");
    expect(actual).to.deep.equal(expected);
  });

  it("returns the correct letter count for input with upper- and lowercase letters", () => {
    const expected = { h: 1, E: 1, l: 2, L: 1, o: 2, W: 1, R: 1, D: 1 };
    const actual = getLetterCount("hElLoWoRlD");
    expect(actual).to.deep.equal(expected);
  });

  it("throws an error when no input is provided", () => {
    expect(getLetterCount).to.throw(TypeError, "Input must be of type string.");
  });

  it("throws an error when non-string input is provided", () => {
    expect(() => getLetterCount(12)).to.throw(
      TypeError,
      "Input must be of type string."
    );
  });
});
