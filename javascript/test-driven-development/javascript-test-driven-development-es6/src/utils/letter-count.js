/**
 * Takes in a string value and returns an object containing letter counts from the contents of the string.
 * @param {string} str
 * @returns An object that consists of letters in the string (keys) and their count of occurrences (values).
 */
export const getLetterCount = (str) => {
  if (typeof str != "string")
    throw new TypeError("Input must be of type string.");

  let output = {};
  for (let l of str) {
    output[l] = output.hasOwnProperty(l) ? output[l] + 1 : 1;
  }
  return output;
};
