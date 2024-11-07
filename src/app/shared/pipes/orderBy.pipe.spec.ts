import { OrderByPipe } from './orderBy.pipe';

describe('OrderByPipe', () => {
  let pipe: OrderByPipe;

  beforeEach(() => {
    pipe = new OrderByPipe();
  });

  it('should sort in ascending order', () => {
    const input = [
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 40 },
    ];
    const property = 'age';
    const order = 'asc';
    const expected = [
      { name: 'Alice', age: 25 },
      { name: 'John', age: 30 },
      { name: 'Bob', age: 40 },
    ];
    expect(pipe.transform(input, property, order)).toEqual(expected);
  });

  it('should sort in descending order', () => {
    const input = [
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 40 },
    ];
    const property = 'age';
    const order = 'desc';
    const expected = [
      { name: 'Bob', age: 40 },
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 },
    ];
    expect(pipe.transform(input, property, order)).toEqual(expected);
  });

  it('should sort with boolean order parameter', () => {
    const input = [
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 40 },
    ];
    const property = 'age';
    const order = true;
    const expected = [
      { name: 'Alice', age: 25 },
      { name: 'John', age: 30 },
      { name: 'Bob', age: 40 },
    ];
    expect(pipe.transform(input, property, order)).toEqual(expected);
  });

  it('should return original array with non-existent property', () => {
    const input = [
      { name: 'John', age: 30 },
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 40 },
    ];
    const property = 'non-existent';
    const order = 'asc';
    expect(pipe.transform(input, property, order)).toEqual(input);
  });

  it('should return empty array with empty input', () => {
    const input: any[] = [];
    const property = 'age';
    const order = 'asc';
    expect(pipe.transform(input, property, order)).toEqual([]);
  });

  it('should return original array with array of non-objects', () => {
    const input = [1, 2, 3];
    const property = 'age';
    const order = 'asc';
    expect(pipe.transform(input, property, order)).toEqual(input);
  });
});
