const assert = require('assert')
const sayHello = require('./index.js').sayHello;

test('should say Hello World!', () => {
  const actual = sayHello('World')
  expect(sayHello('World')).toBe('Hello World!');
});
