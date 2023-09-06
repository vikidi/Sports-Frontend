import { reduce, slice } from 'lodash';

function sum(numbers: number[]) {
  return reduce(numbers, (a, b) => a + b, 0);
}

function average(numbers: number[]) {
  return sum(numbers) / (numbers.length || 1);
}

export function lastTwoMovingAverages(
  numbers: number[],
  movingLength: number = 3
): number[] {
  if (numbers.length < 2) return [0, 0];

  return [
    average(
      slice(
        numbers,
        Math.max(0, numbers.length - 2 - movingLength),
        numbers.length - 1
      )
    ),
    average(
      slice(
        numbers,
        Math.max(0, numbers.length - 1 - movingLength),
        numbers.length
      )
    ),
  ];
}
