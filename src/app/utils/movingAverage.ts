import { slice, mean } from 'lodash';

/**
 * Calculate the moving average of a list of numbers with a given length.
 * The list is treated as a stream of numbers, and the moving average is
 * calculated at each index of the list.
 *
 * @param {number[]} numbers List of numbers to take the moving average of.
 * @param {number} [windowSize=3] How many numbers to take for the moving average.
 * @returns {number[]} A list of numbers where each element is the average of the
 *  previous `windowSize` elements.
 */
export function movingAverage(
  numbers: number[],
  windowSize: number = 3
): number[] {
  if (numbers.some((number) => isNaN(number))) {
    throw new Error('NaN value in array');
  }

  const invalidInput =
    numbers.length === 0 || isNaN(windowSize) || windowSize < 1;
  if (invalidInput) {
    return numbers;
  }

  windowSize = Math.floor(windowSize);
  return numbers.map((_, index) =>
    mean(numbers.slice(Math.max(0, index - windowSize + 1), index + 1))
  );
}

/**
 * Calculate the average of the last `windowSize` numbers in the given list.
 *
 * @param {number[]} numbers List of numbers to take the average of.
 * @param {number} [windowSize=3] How many numbers to take for the moving average.
 * @returns {number} The average of the last `windowSize` numbers in the list.
 */
export function lastMovingAverage(
  numbers: number[],
  windowSize: number = 3
): number {
  if (numbers.some((number) => isNaN(number))) {
    throw new Error('NaN value in array');
  }

  if (numbers.length === 0) {
    return 0;
  }

  if (isNaN(windowSize) || windowSize < 1) {
    return numbers[numbers.length - 1];
  }

  windowSize = Math.floor(windowSize);
  const lastWindowStartIndex = Math.max(0, numbers.length - windowSize);
  const lastWindowNumbers = numbers.slice(lastWindowStartIndex);

  return mean(lastWindowNumbers);
}

/**
 * Calculate the moving average of the last two sets of `windowSize` numbers in
 * the given list.
 *
 * @param {number[]} numbers List of numbers to take the moving average of.
 * @param {number} [windowSize=3] How many numbers to take for the moving average.
 * @returns {number[]} A list of two numbers where the first is the average of the
 *  last `windowSize` numbers in the list, and the second is the average of the
 *  second-to-last `windowSize` numbers in the list.
 */
export function lastTwoMovingAverages(
  numbers: number[],
  windowSize: number = 3
): number[] {
  if (numbers.some((number) => isNaN(number))) {
    throw new Error('NaN value in array');
  }

  if (numbers.length < 2) {
    return [0, 0];
  }

  if (isNaN(windowSize) || windowSize < 1) {
    return [numbers[numbers.length - 2], numbers[numbers.length - 1]];
  }

  windowSize = Math.floor(windowSize);
  return [
    mean(
      slice(
        numbers,
        Math.max(0, numbers.length - 1 - windowSize),
        numbers.length - 1
      )
    ),
    mean(
      slice(numbers, Math.max(0, numbers.length - windowSize), numbers.length)
    ),
  ];
}
