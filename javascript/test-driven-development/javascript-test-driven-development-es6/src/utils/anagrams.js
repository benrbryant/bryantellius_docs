/**
 * Takes two string inputs and returns whether the two strings are anagrams.
 * @param {string} str1
 * @param {string} str2
 * @returns A boolean value
 */

export const isAnagram = (str1, str2) => {
  if (typeof str1 != "string" || typeof str2 != "string")
    throw new TypeError("Inputs must be of type string.");

  let input1 = [...str1.toLowerCase().replace(/ /g, "")];
  let input2 = [...str2.toLowerCase().replace(/ /g, "")];

  if (input1.length != input2.length) return false;

  input1.sort();
  input2.sort();
  return input1.join("") == input2.join("");
};
