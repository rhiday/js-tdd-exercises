const repeatString = require('./repeatString');

describe('repeatString', function() {
  it('repeats 3 times', function() {
    expect(repeatString('hey', 3)).toEqual('heyheyhey');
  });

  it('repeats many, many times', function() {
    expect(repeatString('hey', 10)).toEqual('heyheyheyheyheyheyheyheyheyhey');
  });

  it('repeats 1 time only', function() {
    expect(repeatString('hey', 1)).toEqual('hey');
  });

  it('repeats 0 time', function() {
    expect(repeatString('hey', 0)).toEqual('');
  });

  it('returns ERROR with negative numbers', function() {
    expect(repeatString('hey', -2)).toEqual('ERROR');
  });
});