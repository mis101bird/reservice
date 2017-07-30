'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setRoute = undefined;

var _reduxActions = require('redux-actions');

var _createActions = (0, _reduxActions.createActions)('SET_ROUTE'); // All action creators should follow Flux Standard Action
// please read https://github.com/acdlite/flux-standard-action
// In most time createActions() is enough for almost every use cases


var setRoute = _createActions.setRoute;
exports.setRoute = setRoute;