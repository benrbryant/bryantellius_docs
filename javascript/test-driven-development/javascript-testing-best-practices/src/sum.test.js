const sum = require("./sum");

test("Adds 1, 2, 3, 4, 5 to equal 15", () => {
  // expect and toBe are EXACT matchers
  expect(sum(1, 2, 3, 4, 5)).toBe(15);
});

