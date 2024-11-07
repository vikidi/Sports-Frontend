import { expectToBeCloseToArray } from './../../tests/helpers/matchers';
import {
  lastMovingAverage,
  lastTwoMovingAverages,
  movingAverage,
} from './movingAverage';

describe('movingAverage function', () => {
  it('should return [] for empty input array', () => {
    expect(movingAverage([])).toEqual([]);
  });

  it('should return single element for single element input array', () => {
    expect(movingAverage([5])).toEqual([5]);
  });

  it('should return two elements for two element input array', () => {
    expect(movingAverage([5, 9])).toEqual([5, 7]);
  });

  it('should calculate moving average for input array with more elements than window size', () => {
    expect(movingAverage([1, 2, 3, 4, 5], 3)).toEqual([1, 1.5, 2, 3, 4]);
  });

  it('should calculate moving average for window size of 1', () => {
    expect(movingAverage([1, 2, 3], 1)).toEqual([1, 2, 3]);
  });

  it('should calculate moving average for window size greater than input array length', () => {
    expect(movingAverage([1, 2, 3], 5)).toEqual([1, 1.5, 2]);
  });

  it('should calculate moving average for input array with negative numbers', () => {
    expect(movingAverage([-1, -2, -3], 3)).toEqual([-1, -1.5, -2]);
  });

  it('should handle non-integer windowSize', () => {
    expect(movingAverage([1, 2, 3], 3.5)).toEqual([1, 1.5, 2]);
  });

  it('Should calculate moving average for input array with decimal numbers', () => {
    expectToBeCloseToArray(movingAverage([1.1, 2.2, 3.3], 3), [1.1, 1.65, 2.2]);
  });

  it('should return original array for window size 0', () => {
    expect(movingAverage([1, 2, 3], 0)).toEqual([1, 2, 3]);
  });

  it('should return original array for negative window size', () => {
    expect(movingAverage([1, 2, 3], -1)).toEqual([1, 2, 3]);
  });

  it('should return original array for NaN window size', () => {
    expect(movingAverage([1, 2, 3], NaN)).toEqual([1, 2, 3]);
  });

  it('should throw error for NaN value in array', () => {
    expect(() => movingAverage([1, NaN, 3], 3)).toThrowError();
  });
});

describe('lastMovingAverage function', () => {
  it('should return 0 for an empty array', () => {
    expect(lastMovingAverage([])).toBe(0);
  });

  it('should return the average of the entire array when windowSize is greater than array length', () => {
    expect(lastMovingAverage([1, 2, 3], 4)).toEqual(2);
  });

  it('should return the average of the last windowSize elements', () => {
    expect(lastMovingAverage([1, 2, 3, 4, 5], 3)).toEqual(4);
  });

  it('should return the last value when windowSize is 1', () => {
    expect(lastMovingAverage([1, 2, 3], 1)).toEqual(3);
  });

  it('should handle non-integer windowSize', () => {
    expect(lastMovingAverage([1, 2, 3], 2.5)).toBeCloseTo(2.5);
  });

  it('should handle non-integer input values', () => {
    expect(lastMovingAverage([1.1, 2.2, 3.3], 2)).toBeCloseTo(2.75);
  });

  it('should return last value when windowSize is 0', () => {
    expect(lastMovingAverage([1, 2, 3], 0)).toEqual(3);
  });

  it('should return last value when windowSize is a negative value', () => {
    expect(lastMovingAverage([1, 2, 3], -1)).toEqual(3);
  });

  it('should return the average of the last windowSize elements when windowSize is greater than 1', () => {
    expect(lastMovingAverage([1, 2, 3, 4, 5], 2)).toBeCloseTo(4.5);
  });

  it('should return last value when windowSize is NaN', () => {
    expect(lastMovingAverage([1, 2, 3], NaN)).toEqual(3);
  });

  it('should throw error if some input value is NaN', () => {
    expect(() => lastMovingAverage([1, NaN, 3], 2)).toThrowError();
  });
});

describe('lastTwoMovingAverages function', () => {
  it('should return [0, 0] for empty array', () => {
    expect(lastTwoMovingAverages([])).toEqual([0, 0]);
  });

  it('should return [0, 0] for array with less than 2 elements', () => {
    expect(lastTwoMovingAverages([1])).toEqual([0, 0]);
  });

  it('should return correct moving averages for array with 2 elements', () => {
    expect(lastTwoMovingAverages([1, 2])).toEqual([1, 1.5]);
  });

  it('should return correct moving averages for array with more than 2 elements and windowSize = 1', () => {
    expect(lastTwoMovingAverages([1, 2, 3, 4, 5], 1)).toEqual([4, 5]);
  });

  it('should return correct moving averages for array with more than 2 elements and windowSize = 3', () => {
    expect(lastTwoMovingAverages([1, 2, 3, 4, 5, 6])).toEqual([4, 5]);
  });

  it('should return correct moving averages for array with more than 2 elements and windowSize > array length', () => {
    expect(lastTwoMovingAverages([1, 2, 3, 4, 5], 10)).toEqual([2.5, 3]);
  });

  it('should return correct moving averages for array with non-integer windowSize', () => {
    expect(lastTwoMovingAverages([1, 2, 3, 4, 5], 3.5)).toEqual([3, 4]);
  });

  it('should return correct moving averages for array with non-integer numbers', () => {
    expectToBeCloseToArray(
      lastTwoMovingAverages([1.1, 2.2, 3.3, 4.4, 5.5]),
      [3.3, 4.4]
    );
  });

  it('should return last values when windowSize is 0', () => {
    expect(lastTwoMovingAverages([1, 2, 3], 0)).toEqual([2, 3]);
  });

  it('should return last values when windowSize is a negative value', () => {
    expect(lastTwoMovingAverages([1, 2, 3], -1)).toEqual([2, 3]);
  });

  it('should return last values when windowSize is NaN', () => {
    expect(lastTwoMovingAverages([1, 2, 3], NaN)).toEqual([2, 3]);
  });

  it('should throw error if some input value is NaN', () => {
    expect(() => lastTwoMovingAverages([1, NaN, 3], 2)).toThrowError();
  });
});
