'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('redux-actions');

var _metaHeader = require('../actions/metaHeader');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  title: 'Redux exmaple'
};

var reducerMap = _defineProperty({}, _metaHeader.setTitle, function (state, action) {
  return _extends({}, state, { title: 'Redux example - ' + action.payload });
});

exports.default = (0, _reduxActions.handleActions)(reducerMap, initialState);