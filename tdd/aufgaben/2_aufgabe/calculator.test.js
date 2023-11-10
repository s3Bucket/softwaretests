const calculator = require('./calculator.js');

describe('When adding two numbers', function() {

  it('should add 1 + 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

})

describe('When substracting two numbers', function() {

  it('should sub 21 and 12 and equal 9', () => {
    expect(calculator.sub(21, 12)).toBe(9);
  });

})

describe('When multiply two numbers', function() {

  it('should multiply 8 and 7 to equal 56', () => {
    expect(calculator.multiply(8, 7)).toBe(56);
  });

})

describe('When dividing two numbers', function() {

  it('should divide 4 and 2 and equal 2', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });

})