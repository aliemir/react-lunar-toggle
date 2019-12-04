'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactToggle = require('react-toggle');

var _reactToggle2 = _interopRequireDefault(_reactToggle);

var _suncalc = require('suncalc');

var _suncalc2 = _interopRequireDefault(_suncalc);

require('styles.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Moon = function Moon() {
  var phase = _suncalc2.default.getMoonIllumination().phase;
  if (phase < 0.05) {
    return '🌑';
  } else if (phase >= 0.05 && phase < 0.235) {
    return '🌒';
  } else if (phase >= 0.235 && phase < 0.275) {
    return '🌓';
  } else if (phase >= 0.275 && phase < 0.475) {
    return '🌔';
  } else if (phase >= 0.475 && phase < 0.535) {
    return '🌕';
  } else if (phase >= 0.535 && phase < 0.735) {
    return '🌖';
  } else if (phase >= 0.735 && phase < 0.775) {
    return '🌗';
  } else if (phase >= 0.775) {
    return '🌘';
  } else {
    return 'a';
  }
};

var Sun = function Sun() {
  return '☀️';
};

var LunarToggle = function LunarToggle(props) {
  return _react2.default.createElement(_reactToggle2.default, _extends({}, props, {
    icons: {
      checked: _react2.default.createElement(Moon, null),
      unchecked: _react2.default.createElement(Sun, null)
    }
  }));
};
exports.default = LunarToggle;