const { getGreeting, addNum } = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('add two numbers', () => {
  expect(addNum(2, 3)).toBe(5)
})



