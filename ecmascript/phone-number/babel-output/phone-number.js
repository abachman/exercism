'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PhoneNumber = (function () {
  function PhoneNumber(number) {
    _classCallCheck(this, PhoneNumber);

    this.original = number;
  }

  _createClass(PhoneNumber, [{
    key: 'sanitize',
    value: function sanitize(number) {
      return number.replace(/[^0-9]/g, '');
    }
  }, {
    key: 'normalize',
    value: function normalize(number) {
      // nothing to be done
      if (number.length === 10) {
        return number;
      } else if (number.length === 11 && number[0] === '1') {
        return number.slice(1);
      } else if (number.length < 10) {
        return '0000000000';
      } else {
        return '0000000000';
      }
    }
  }, {
    key: 'number',
    value: function number() {
      return this.normalize(this.sanitize(this.original));
    }
  }, {
    key: 'split',
    value: function split() {
      var formatter = /(\d{3})(\d{3})(\d{4})/;
      var matched = formatter.exec(this.number());
      return [matched[1], matched[2], matched[3]];
    }
  }, {
    key: 'areaCode',
    value: function areaCode() {
      return this.split()[0];
    }
  }, {
    key: 'toString',
    value: function toString() {
      var split = this.split();
      return '(' + split[0] + ') ' + split[1] + '-' + split[2];
    }
  }]);

  return PhoneNumber;
})();

exports['default'] = PhoneNumber;
module.exports = exports['default'];