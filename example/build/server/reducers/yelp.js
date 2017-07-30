'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reducers;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; // In this example you can see a common reducer coding style for service actions


var _reduxActions = require('redux-actions');

var _yelp = require('../actions/yelp');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var initialState = {
  search: false,
  business: {}
};

var reducers = (_reducers = {}, _defineProperty(_reducers, _yelp.yelpSearch, function (state, action) {
  return _extends({}, state, { search: action.payload });
}), _defineProperty(_reducers, _yelp.yelpBusiness, function (state, action) {
  return _extends({}, state, { business: action.payload });
}), _reducers);

// We prefer to export only 1 reducer as default per file.
// If you like to split the reducer logics, put them into sub directory,
// or export as another name.
// handleServiceActions() help you to create a reducer function for service actions
exports.default = (0, _reduxActions.handleActions)(reducers, initialState);