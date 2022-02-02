const sayHello = require('./index.js').sayHello;

test('should say Hello World!', () => {
  expect(sayHello('World')).toBe('Hello World!');
});
