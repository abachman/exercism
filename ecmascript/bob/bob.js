//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Bob {
  // if message contains letters and is all uppercase
  isYelling(s) {
    for (var c of s) {
      if (c != c.toUpperCase()) return false
    }
    if (/[A-Za-z]/.test(s)) return true
    else return false
  }

  hey(message) {
    if (this.isYelling(message)) {
      return 'Whoa, chill out!'
    } else if (/.+\?$/.test(message)) {
      // if message ends with a question mark
      return 'Sure.'
    } else if (/^\s*$/.test(message)) {
      // if message is all whitespace or blank
      return 'Fine. Be that way!'
    }
    return 'Whatever.'
  }
}

export default Bob;

