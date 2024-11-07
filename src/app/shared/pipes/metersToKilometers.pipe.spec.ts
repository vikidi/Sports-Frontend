import { MetersToKilometersPipe } from './metersToKilometers.pipe';

describe('MetersToKilometersPipe', () => {
  let pipe: MetersToKilometersPipe;

  beforeEach(() => {
    pipe = new MetersToKilometersPipe();
  });

  it('should convert meters to kilometers', () => {
    const result = pipe.transform(1000);
    expect(result).toBe(1);
  });

  it('should handle decimal meters', () => {
    const result = pipe.transform(1500);
    expect(result).toBe(1.5);
  });

  it('should handle negative meters', () => {
    const result = pipe.transform(-1000);
    expect(result).toBe(-1);
  });

  it('should handle zero meters', () => {
    const result = pipe.transform(0);
    expect(result).toBe(0);
  });

  it('should handle non-integer meters', () => {
    const result = pipe.transform(1500.5);
    expect(result).toBe(1.5005);
  });

  it('should handle NaN meters', () => {
    const result = pipe.transform(NaN);
    expect(result).toBeNaN();
  });
});
