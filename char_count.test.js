const charCount = require('./char_count')

test('returns the input string and the number of chars it has', () => {
  const word = 'Homer'
  let output
  console.log = input => output = input

  charCount(word)

  expect(output).toBe('Homer has 5 characters.')
})