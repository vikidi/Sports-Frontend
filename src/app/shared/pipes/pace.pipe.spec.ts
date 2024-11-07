import { PacePipe } from './pace.pipe';

describe('PacePipe', () => {
  let pipe: PacePipe;

  beforeEach(() => {
    pipe = new PacePipe();
  });

  it('should convert minutes per kilometer to a pace string in the format m:ss', () => {
    expect(pipe.transform(5.5)).toBe('5:30');
    expect(pipe.transform(10.25)).toBe('10:15');
    expect(pipe.transform(1.01)).toBe('1:01');
    expect(pipe.transform(0.01)).toBe('0:01');
  });

  it('should handle negative values', () => {
    expect(pipe.transform(-5.5)).toBe('0:00');
  });

  it('should handle zero values', () => {
    expect(pipe.transform(0)).toBe('0:00');
  });

  it('should handle NaN values', () => {
    expect(pipe.transform(NaN)).toBe('0:00');
  });
});
