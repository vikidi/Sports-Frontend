import { LastMovingAveragePipe } from './lastMovingAverage.pipe';

describe('LastMovingAveragePipe', () => {
  let pipe: LastMovingAveragePipe;

  beforeEach(() => {
    pipe = new LastMovingAveragePipe();
  });

  it('should return 0 for empty array', () => {
    const array: any[] = [];
    const field = 'test';
    const windowSize = 3;
    expect(pipe.transform(array, field, windowSize)).toBe(0);
  });

  it('should return average of entire array when windowSize is greater than array length', () => {
    const array = [{ test: 1 }, { test: 2 }, { test: 3 }];
    const field = 'test';
    const windowSize = 4;
    expect(pipe.transform(array, field, windowSize)).toBe(2);
  });

  it('should return average of last windowSize elements', () => {
    const array = [
      { test: 1 },
      { test: 2 },
      { test: 3 },
      { test: 4 },
      { test: 5 },
    ];
    const field = 'test';
    const windowSize = 3;
    expect(pipe.transform(array, field, windowSize)).toBe(4);
  });

  it('should handle non-integer windowSize', () => {
    const array = [
      { test: 1 },
      { test: 2 },
      { test: 3 },
      { test: 4 },
      { test: 5 },
    ];
    const field = 'test';
    const windowSize = 3.5;
    expect(pipe.transform(array, field, windowSize)).toBe(4);
  });

  it('should return last value when windowSize is negative', () => {
    const array = [
      { test: 1 },
      { test: 2 },
      { test: 3 },
      { test: 4 },
      { test: 5 },
    ];
    const field = 'test';
    const windowSize = -1;
    expect(pipe.transform(array, field, windowSize)).toBe(5);
  });

  it('should return last value when windowSize is 0', () => {
    const array = [
      { test: 1 },
      { test: 2 },
      { test: 3 },
      { test: 4 },
      { test: 5 },
    ];
    const field = 'test';
    const windowSize = 0;
    expect(pipe.transform(array, field, windowSize)).toBe(5);
  });

  it('should return last value when windowSize is 1', () => {
    const array = [
      { test: 1 },
      { test: 2 },
      { test: 3 },
      { test: 4 },
      { test: 5 },
    ];
    const field = 'test';
    const windowSize = 1;
    expect(pipe.transform(array, field, windowSize)).toBe(5);
  });

  it('should return last value when windowSize is NaN', () => {
    const array = [
      { test: 1 },
      { test: 2 },
      { test: 3 },
      { test: 4 },
      { test: 5 },
    ];
    const field = 'test';
    const windowSize = 1;
    expect(pipe.transform(array, field, windowSize)).toBe(5);
  });

  it('should throw error on non-numeric values in array', () => {
    const array = [
      { test: 1 },
      { test: 'a' },
      { test: 3 },
      { test: 4 },
      { test: 5 },
    ];
    const field = 'test';
    const windowSize = 3;
    expect(() => pipe.transform(array, field, windowSize)).toThrowError();
  });

  it('should throw error on missing field in array elements', () => {
    const array = [{ test: 1 }, {}, { test: 3 }, { test: 4 }, { test: 5 }];
    const field = 'test';
    const windowSize = 3;
    expect(() => pipe.transform(array, field, windowSize)).toThrowError();
  });

  it('should throw error on NaN value in array', () => {
    const array = [
      { test: 1 },
      { test: NaN },
      { test: 3 },
      { test: 4 },
      { test: 5 },
    ];
    const field = 'test';
    const windowSize = 3;
    expect(() => pipe.transform(array, field, windowSize)).toThrowError();
  });
});
