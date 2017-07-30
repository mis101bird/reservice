'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.MainComponent = exports.configureStore = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _redux = require('redux');

var _reactRedux = require('react-redux');

var _reduxLogger = require('redux-logger');

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _index = require('./reducers/index');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('./middlewares/index');

var _index4 = _interopRequireDefault(_index3);

var _MainComponent = require('./containers/MainComponent');

var _MainComponent2 = _interopRequireDefault(_MainComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// create the redux store with initial state
var configureStore = exports.configureStore = function configureStore(initState) {
  var devTool = global.window ? global.window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : undefined;
  var composeEnhancers = devTool || _redux.compose;

  if (global.window && !devTool) {
    _index4.default.push(_reduxLogger2.default);
  }

  return (0, _redux.createStore)(_index2.default, initState, composeEnhancers(_redux.applyMiddleware.apply(undefined, _toConsumableArray(_index4.default))));
};

var MainComponent = exports.MainComponent = function MainComponent(_ref) {
  var store = _ref.store;
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_MainComponent2.default, null)
  );
};

MainComponent.propTypes = {
  store: _propTypes2.default.object.isRequired
};

if (global.window) {
  (0, _reactDom.render)(_react2.default.createElement(MainComponent, { store: configureStore(global.window.REDUXDATA) }), global.window.document.getElementById('main'));
}

if (module.hot) {
  module.hot.accept();
}