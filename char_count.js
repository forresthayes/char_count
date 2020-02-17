function charCount(str) {
  if (str === undefined || str === '') {
    console.log(`Please enter something.`)
  } else {
    console.log(`${str} has ${str.length} characters.`)
  }
}

module.exports = charCount