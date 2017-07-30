'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var debugDispatch = (0, _debug2.default)('redux:dispatch');
var debugState = (0, _debug2.default)('redux:state');

// A simple logger at server side
var debugLogger = function debugLogger(store) {
  return function (next) {
    return function (action) {
      debugDispatch('%O', action);
      var result = next(action);
      debugState('%O', store.getState());
      return result;
    };
  };
};

exports.default = debugLogger;