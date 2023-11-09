const assert = require('assert');
const greeting = require('./greeting');

describe('When the greeting method is called with the name "Colin"', () => {

  let result = greeting.greet('Colin');

  it('should return a greeting "Hello Colin"', () => {
    assert.equal(result, "Hello Colin")
  })

})