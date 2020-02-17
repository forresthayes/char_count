const charCount = require('./char_count')

beforeEach(() => {
  mockConsole = jest.fn(str => null)
  console.log = mockConsole
})

test('returns the input string and the number of chars it has', () => {
  charCount('Homer')

  expect(mockConsole.mock.calls[0][0]).toBe('Homer has 5 characters.')
})

test('when nothing is entered, instructs user to enter something', () => {
  charCount()

  expect(mockConsole.mock.calls[0][0]).toBe('Please enter something.')
})

test('when empty string is entered, instructs user to enter something', () => {
  charCount('')

  expect(mockConsole.mock.calls[0][0]).toBe('Please enter something.')
})

