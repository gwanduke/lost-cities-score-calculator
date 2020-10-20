import calcLine from "./calcLine";

test.each([
  [[], 0],
  [[2], -18],
  [[11, 2, 10], -16],
  [[4, 6, 10], 0],
  [[2, 4, 6, 10], 2],
  [[2, 4, 6, 10, 11], 4],
  [[3, 4, 5, 6, 7, 8, 9], 22],
])("calculate accurately", (input, output) => {
  expect(calcLine(input)).toBe(output);
});

test.each([
  [[2, 3, 4, 5, 6, 7, 8, 9], 24 + 20],
  [[2, 3, 4, 5, 6, 7, 8, 9, 11], 48 + 20],
])("add bonus point", (input, output) => {
  expect(calcLine(input)).toBe(output);
});
