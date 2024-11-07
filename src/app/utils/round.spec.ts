import { round } from './round';

describe('round function', () => {
  it('should round down normally', () => {
    expect(round(1.1238, 2)).toBe(1.12);
  });

  it('should round up normally', () => {
    expect(round(1.1281, 2)).toBe(1.13);
  });

  it('should round to zero decimal places', () => {
    expect(round(1.1234)).toBe(1);
    expect(round(-1.1234)).toBe(-1);
  });

  it('should round to a specified number of decimal places', () => {
    expect(round(1.1234, 2)).toBe(1.12);
    expect(round(-1.1234, 2)).toBe(-1.12);
  });

  it('should round negative numbers', () => {
    expect(round(-1.1234, 2)).toBe(-1.12);
  });

  it('should round with a non-integer number of decimal places', () => {
    expect(round(1.1234, 2.5)).toBe(1.12);
  });

  it('should handle NaN value', () => {
    expect(round(NaN)).toBeNaN();
  });

  it('should handle NaN number of decimal places', () => {
    expect(round(1.1234, NaN)).toBe(1.1234);
  });
});
