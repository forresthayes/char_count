const charCount = require('./char_count')

test('returns the input string and the number of chars it has', () => {
  expect(charCount('Homer')).toBe('Homer has 5 characters.')
})

test('when nothing is entered, instructs user to enter something', () => {
  expect(charCount()).toBe('Please enter something.')
})

test('when empty string is entered, instructs user to enter something', () => {
  expect(charCount('')).toBe('Please enter something.')
})

