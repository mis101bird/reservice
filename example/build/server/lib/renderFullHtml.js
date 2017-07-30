'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _server = require('react-dom/server');

var _serializeJavascript = require('serialize-javascript');

var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

var _reduxapp = require('../reduxapp');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-danger */
var Html = function Html(_ref) {
  var main = _ref.main,
      state = _ref.state;
  return _react2.default.createElement(
    'html',
    null,
    _react2.default.createElement(
      'head',
      null,
      _react2.default.createElement(
        'title',
        null,
        state.metaHeader.title
      )
    ),
    _react2.default.createElement(
      'body',
      null,
      _react2.default.createElement('div', { id: 'main', dangerouslySetInnerHTML: { __html: main } }),
      _react2.default.createElement('script', { dangerouslySetInnerHTML: { __html: 'var REDUXDATA=' + (0, _serializeJavascript2.default)(state) + ';' } }),
      _react2.default.createElement('script', { src: '/statics/bundle/reduxapp.js' })
    )
  );
};

Html.propTypes = {
  main: _propTypes2.default.string.isRequired,
  state: _propTypes2.default.object.isRequired
};

var renderFullHtml = function renderFullHtml(store) {
  var state = store.getState();
  var main = (0, _server.renderToString)(_react2.default.createElement(_reduxapp.MainComponent, { store: store }));

  return '<!DOCTYPE html>' + (0, _server.renderToStaticMarkup)(_react2.default.createElement(Html, { main: main, state: state }));
};

exports.default = renderFullHtml;