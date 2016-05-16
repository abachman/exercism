'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Pangram = (function () {
  function Pangram(phrase) {
    _classCallCheck(this, Pangram);

    // check whether the phrase has one of each letter of
    // the english alphabet
    this.phrase = phrase;
    this.letters = phrase.toLowerCase().split('').sort();
    this.alphabet = 'abcdefghijklmnopqrstuvwxyz';
  }

  _createClass(Pangram, [{
    key: 'isPangram',
    value: function isPangram() {
      var i = 0; // track index
      var next = 0; // index of next given letter
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.letters[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var l = _step.value;

          // if indexOf l in alphabet is == to or 1 greater
          // than previous letter, then
          next = this.alphabet.indexOf(l);

          if (next === -1 || next === i) {
            // non-letter or same letter
            continue;
          } else if (next === i + 1) {
            // next required letter
            i = next;
            continue;
          } else {
            // only possibility left is a step > 1, which means
            // the phrase is skipping a required letter

            return false;
          }
        }

        // index of 25 means phrase included every letter
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator['return']) {
            _iterator['return']();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return i == 25;
    }
  }]);

  return Pangram;
})();

exports['default'] = Pangram;
module.exports = exports['default'];