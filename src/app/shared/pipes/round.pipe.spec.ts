import { RoundPipe } from './round.pipe';

describe('RoundPipe', () => {
  let pipe: RoundPipe;

  beforeEach(() => {
    pipe = new RoundPipe();
  });

  it('should round down normally', () => {
    const result = pipe.transform(1.1238, 2);
    expect(result).toBe(1.12);
  });

  it('should round up normally', () => {
    const result = pipe.transform(1.1281, 2);
    expect(result).toBe(1.13);
  });

  it('should round to zero decimal places', () => {
    const result = pipe.transform(1.1238, 0);
    expect(result).toBe(1);
  });

  it('should round with a specified number of decimal places', () => {
    const result = pipe.transform(1.1238, 3);
    expect(result).toBe(1.124);
  });

  it('should round with a negative number of decimal places', () => {
    const result = pipe.transform(1.1238, -1);
    expect(result).toBe(1);
  });

  it('should round with a non-integer number of decimal places', () => {
    const result = pipe.transform(1.1238, 2.5);
    expect(result).toBe(1.12);
  });

  it('should handle NaN value', () => {
    const result = pipe.transform(NaN, 2);
    expect(result).toBeNaN();
  });

  it('should handle NaN number of decimal places', () => {
    const result = pipe.transform(1.1238, NaN);
    expect(result).toBe(1.1238);
  });
});
