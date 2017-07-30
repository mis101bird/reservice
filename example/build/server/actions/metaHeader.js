'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setTitle = undefined;

var _reduxActions = require('redux-actions');

var actions = (0, _reduxActions.createActions)('SET_TITLE'); // All action creators should follow Flux Standard Action
// please read https://github.com/acdlite/flux-standard-action
// In most time createActions() is enough for almost every use cases
// document: https://github.com/acdlite/redux-actions#createactionsactionmap-identityactions
var setTitle = actions.setTitle;
exports.setTitle = setTitle;
exports.default = actions;