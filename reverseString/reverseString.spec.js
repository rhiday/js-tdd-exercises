const reverseString = require('./reverseString.js');

describe('reverseString', function() {
  it('reverse single word', function() {
    expect(reverseString('hello')).toEqual('olleh');
  });

  it('reverse multiple words', function() {
    expect(reverseString('hello there!')).toEqual('!ereht olleh');
  });

  it('works with number and punctuation', function() {
    expect(reverseString('123! abc!')).toEqual('!cba !321');
  });

});