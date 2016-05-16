'use strict';

export default class Words {
  count(phrase) {
    let count = {}
    for (var word of phrase.trim().split(/\s+/)) {
      // normalize words to lower case
      word = word.toLowerCase()
      // ++ if set or set to 1 if unset
      count[word] = count[word] ? count[word] + 1 : 1
    }
    return count
  }
}
