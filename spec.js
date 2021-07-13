const assert = require('assert')
const sayHello = require('./index.js').sayHello;

describe('Greetings', function () {

  it('should say Hello World!', function() {
    const actual = sayHello('World')
    assert.strictEqual(actual, 'Hello World!')
  })

})
