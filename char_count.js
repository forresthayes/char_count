function charCount(str) {
  if (str === undefined || str === '') {
    return `Please enter something.`
  } else {
    return `${str} has ${str.length} characters.`
  }
}

module.exports = charCount