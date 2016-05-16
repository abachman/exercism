export default class Pangram {
  constructor(phrase) {
    // check whether the phrase has one of each letter of
    // the english alphabet
    this.phrase = phrase
    this.letters = phrase.toLowerCase().split('').sort()
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz'
  }

  isPangram() {
    let i = 0 // track index
    let next = 0 // index of next given letter
    for (var l of this.letters) {
      // if indexOf l in alphabet is == to or 1 greater
      // than previous letter, then
      next = this.alphabet.indexOf(l)

      if (next === -1 || next === i) {
        // non-letter or same letter
        continue
      } else if (next === (i + 1)) {
        // next required letter
        i = next
        continue
      } else {
        // only possibility left is a step > 1, which means
        // the phrase is skipping a required letter
        return false
      }
    }

    // index of 25 means phrase included every letter
    return i == 25
  }
}
