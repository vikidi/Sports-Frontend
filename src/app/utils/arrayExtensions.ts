/**
 * Checks if two arrays contain the same elements, regardless of order.
 * @param a the first array
 * @param b the second array
 * @returns true if the arrays are equal, false otherwise
 */
export const arraysEqual = (a: any[], b: any[]): boolean => {
  return (
    a.every((item) => b.includes(item)) && b.every((item) => a.includes(item))
  );
};
