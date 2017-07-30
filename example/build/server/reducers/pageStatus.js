'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var initialState = {
  isLoading: false

  // When service is not end, it means 'now loading...'
};var pageStatus = function pageStatus() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (action.type !== 'CALL_SERVICE') {
    return state;
  }

  return _extends({}, state, { isLoading: action.meta.serviceState !== 'END' });
};

exports.default = pageStatus;