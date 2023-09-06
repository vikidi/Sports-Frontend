import { reduce, slice, chain } from 'lodash';

function sum(numbers: number[]) {
  return reduce(numbers, (a, b) => a + b, 0);
}

function average(numbers: number[]) {
  return sum(numbers) / (numbers.length || 1);
}

function window(_number: number, index: number, array: number[]) {
  return slice(array, Math.max(0, index - 3), index + 1);
}

export function movingAverage(numbers: number[]) {
  return chain(numbers).map(window).map(average).value();
}
