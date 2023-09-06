import { reduce, slice, chain } from 'lodash';

function sum(numbers: number[]) {
  return reduce(numbers, (a, b) => a + b, 0);
}

function average(numbers: number[]) {
  return sum(numbers) / (numbers.length || 1);
}

export function movingAverage(numbers: number[], movingLength: number = 3) {
  if (!numbers.length) return [0];

  return chain(numbers)
    .map((_number, index, array) =>
      slice(array, Math.max(0, index - movingLength), index + 1)
    )
    .map(average)
    .value();
}
