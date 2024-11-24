/**
 * Checks if two arrays contain the same elements, regardless of order.
 * @param a the first array
 * @param b the second array
 * @returns true if the arrays are equal, false otherwise
 */
export const arraysEqual = (a: any[], b: any[]): boolean => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  const aSorted = a.slice().sort();
  const bSorted = b.slice().sort();

  for (let i = 0; i < a.length; ++i) {
    if (aSorted[i] !== bSorted[i]) return false;
  }

  return true;
};
