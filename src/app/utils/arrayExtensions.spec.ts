import { arraysEqual } from './arrayExtensions';

describe('arraysEqual function', () => {
  it('should return true for arrays with the same elements', () => {
    expect(arraysEqual([1, 2, 3], [3, 2, 1]))
      .withContext('numbers')
      .toBe(true);
    expect(arraysEqual(['a', 'b', 'c'], ['c', 'b', 'a']))
      .withContext('characters')
      .toBe(true);
    expect(arraysEqual([true, false, true], [true, true, false]))
      .withContext('booleans')
      .toBe(true);
  });

  it('should return false for arrays with different elements', () => {
    expect(arraysEqual([1, 2, 3], [4, 5, 6]))
      .withContext('numbers')
      .toBe(false);
    expect(arraysEqual(['a', 'b', 'c'], ['a', 'b', 'a']))
      .withContext('characters')
      .toBe(false);
    expect(arraysEqual([true, false, true], [true, false, false]))
      .withContext('booleans')
      .toBe(false);
  });

  it('should return false for arrays with different lengths', () => {
    expect(arraysEqual([1, 2, 3], [1, 2]))
      .withContext('numbers')
      .toBe(false);
    expect(arraysEqual(['a', 'b', 'c'], ['a', 'b', 'c', 'c']))
      .withContext('characters')
      .toBe(false);
    expect(arraysEqual([true, false, true], [true, false]))
      .withContext('booleans')
      .toBe(false);
  });
});
