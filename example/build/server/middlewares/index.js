'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reservice = require('reservice');

var _debugLogger = require('./debugLogger');

var _debugLogger2 = _interopRequireDefault(_debugLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// This is a place to put middleware list for your application
var middlewares = [_reservice.serviceMiddleware];

// You can adopt middlewares for development
if (process.env.NODE_ENV === 'development') {
  if (!global.window) {
    middlewares.push(_debugLogger2.default);
  }
}

exports.default = middlewares;