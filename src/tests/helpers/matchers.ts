/**
 * Custom matcher to compare two arrays of numbers for approximate equality.
 *
 * @param actual The array of actual numbers to be tested.
 * @param expected The array of expected numbers to compare against.
 *
 * @remarks
 * Both arrays must be of the same length. Each corresponding pair of numbers
 * in the arrays are compared using Jasmine's `toBeCloseTo` matcher.
 * If the numbers are not approximately equal, the test will fail, indicating
 * the index of the mismatch.
 */
export const expectToBeCloseToArray = (
  actual: number[],
  expected: number[]
) => {
  expect(actual.length).toBe(expected.length);
  actual.forEach((x, i) =>
    expect(x).withContext(`[${i}]`).toBeCloseTo(expected[i])
  );
};
