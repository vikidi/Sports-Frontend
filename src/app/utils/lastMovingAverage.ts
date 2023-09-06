import { reduce, slice } from 'lodash';

function sum(numbers: number[]) {
  return reduce(numbers, (a, b) => a + b, 0);
}

function average(numbers: number[]) {
  return sum(numbers) / (numbers.length || 1);
}

export function lastMovingAverage(numbers: number[], movingLength: number = 3) {
  if (!numbers.length) return [0];

  return average(
    slice(
      numbers,
      Math.max(0, numbers.length - 1 - movingLength),
      numbers.length
    )
  );
}
