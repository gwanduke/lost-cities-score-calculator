import { calculateColor } from "../calculator";

test("", () => {
  expect(() => calculateColor([1], 0)).toThrow();
  expect(() => calculateColor([11], 0)).toThrow();
  expect(() => calculateColor([2, 3, 4], 4)).toThrow();

  expect(calculateColor([], 0)).toBe(0);
  expect(calculateColor([], 3)).toBe(-20 * 4);
  expect(calculateColor([2, 3], 3)).toBe((-20 + 5) * 4);
  expect(calculateColor([2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toBe(
    (-20 + 54) * 4 + 20
  );
});
