const charCount = require('./char_count')

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question('What is the input string? ', (str) => {
  console.log(charCount(str))
  readline.close()
})