const pallindromes = require ('./pallindromes.js');

describe('pallindromes', function() {
	it('works with single words', function() {
	  expect(pallindromes('racecar')).toEqual(true);
	});
	it('works with punctuation', function() {
	  expect(pallindromes('Racecar!')).toEqual(true);
	});
	it('works with multiple words', function() {
	  expect(pallindromes('A car, a man, a maraca.')).toEqual(true);
	});
	it('works with multiple words', function() {
	  expect(pallindromes('Animal loots foliated detail of stool lamina.')).toEqual(true);
	});
	it('doesn\'t just always return true', function() {
	  expect(pallindromes('ZZZZ car, a man, a maraca.')).toEqual(false);
	});
  
  });