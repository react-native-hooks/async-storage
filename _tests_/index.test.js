import useAsyncStorage from '../src';

describe('Test Async Storage function', () => {
  it('should be a function', () => {
    expect(typeof useAsyncStorage).toBe('function');
  });
});
