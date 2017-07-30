'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('redux-actions');

var _routing = require('../actions/routing');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultState = {
  route: {
    name: 'default',
    config: {},
    query: {}
  }
};

exports.default = (0, _reduxActions.handleActions)(_defineProperty({}, _routing.setRoute, function (state, action) {
  return _extends({}, state, { route: action.payload });
}), defaultState);