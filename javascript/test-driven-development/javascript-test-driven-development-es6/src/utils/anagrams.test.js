import { expect } from "chai";
import { isAnagram } from "./anagrams";

describe("isAnagram - basic functionality", () => {
  describe("should return true for valid string inputs that are anagrams", () => {
    it("should return correct boolean value for anagrams of all lowercase", () => {
      const expected = true;
      const actual = isAnagram("nana", "anna");
      expect(actual).to.equal(expected);
    });

    it("should return correct boolean value for anagrams of all uppercase", () => {
      const expected = true;
      const actual = isAnagram("APPLE", "PEALP");
      expect(actual).to.equal(expected);
    });

    it("should return correct boolean value for anagrams of mixed casing", () => {
      const expected = true;
      const actual = isAnagram("oRanGe", "gRoANe");
      expect(actual).to.equal(expected);
    });

    it("should ignore white space", () => {
      const expected = true;
      const actual = isAnagram("h e l l o w o r l d", "world hello");
      expect(actual).to.equal(expected);
    });
  });

  describe("should return false for valid string inputs that are not anagrams", () => {
    it("should return false for non-anagrams of all lowercase", () => {
      const expected = false;
      const actual = isAnagram("ben", "ned");
      expect(actual).to.equal(expected);
    });

    it("should return false for non-anagrams of all uppercase", () => {
      const expected = false;
      const actual = isAnagram("APPLES", "PEALP");
      expect(actual).to.equal(expected);
    });

    it("should return false for non-anagrams of mixed casing", () => {
      const expected = false;
      const actual = isAnagram("oRanGeY", "gRoANeS");
      expect(actual).to.equal(expected);
    });

    it("should ignore white space", () => {
      const expected = false;
      const actual = isAnagram("one by one", "byoneby");
      expect(actual).to.equal(expected);
    });
  });

  describe("should throw a TypeError if either of the two inputs are invalid (not string values)", () => {
    it("should throw an error if given no inputs", () => {
      expect(isAnagram).to.throw(TypeError, "Inputs must be of type string.");
    });

    it("should throw an error if one of the given inputs are not strings", () => {
      expect(() => isAnagram(12, "hello")).to.throw(
        TypeError,
        "Inputs must be of type string."
      );
    });

    it("should throw an error if both of the given inputs are not strings", () => {
      expect(() => isAnagram(12, { hello: "world" })).to.throw(
        TypeError,
        "Inputs must be of type string."
      );
    });
  });
});
