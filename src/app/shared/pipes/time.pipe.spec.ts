import { TimePipe } from './time.pipe';

describe('TimePipe', () => {
  let pipe: TimePipe;

  beforeEach(() => {
    pipe = new TimePipe();
  });

  it('should convert total seconds less than 1 hour', () => {
    expect(pipe.transform(30)).toBe('00:00:30');
    expect(pipe.transform(59)).toBe('00:00:59');
  });

  it('should convert total seconds equal to 1 hour', () => {
    expect(pipe.transform(3600)).toBe('01:00:00');
  });

  it('should convert total seconds greater than 1 hour', () => {
    expect(pipe.transform(3661)).toBe('01:01:01');
  });

  it('should convert total seconds greater than 10 hours', () => {
    expect(pipe.transform(36001)).toBe('10:00:01');
  });

  it('should convert total seconds greater than 100 hour', () => {
    expect(pipe.transform(360001)).toBe('100:00:01');
  });

  it('should convert total seconds equal to 1 minute', () => {
    expect(pipe.transform(60)).toBe('00:01:00');
  });

  it('should convert total seconds equal to 1 second', () => {
    expect(pipe.transform(1)).toBe('00:00:01');
  });

  it('should convert total seconds equal to 0', () => {
    expect(pipe.transform(0)).toBe('00:00:00');
  });

  it('should handle negative total seconds', () => {
    expect(pipe.transform(-1)).toBe('00:00:00');
  });

  it('should handle NaN total seconds', () => {
    expect(pipe.transform(NaN)).toBe('00:00:00');
  });
});
