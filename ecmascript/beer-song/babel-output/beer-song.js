'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
function inflect(num) {
  if (num === 0) return 'no more bottles';else if (num === 1) return '1 bottle';else return num + ' bottles';
}

function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function firstLine(num) {
  var bPhrase = inflect(num);
  return capitalize(bPhrase) + ' of beer on the wall, ' + bPhrase + ' of beer.';
}

function secondLine(num) {
  if (num < 0) {
    return 'Go to the store and buy some more, 99 bottles of beer on the wall.';
  } else if (num === 0) {
    return 'Take it down and pass it around, no more bottles of beer on the wall.';
  } else {
    return 'Take one down and pass it around, ' + inflect(num) + ' of beer on the wall.';
  }
}

function verse(num) {
  return firstLine(num) + '\n' + secondLine(num - 1) + '\n';
}

// If to is not given, sing to the end. If neither is given, sing the whole song.
function sing() {
  var from = arguments.length <= 0 || arguments[0] === undefined ? 99 : arguments[0];
  var to = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

  var song = [];
  for (; from > to - 1; from--) {
    song.push(verse(from));
  }
  return song.join("\n");
}

var Beer = { verse: verse, sing: sing };

exports['default'] = Beer;
module.exports = exports['default'];