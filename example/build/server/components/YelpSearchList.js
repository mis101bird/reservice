'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _YelpSearchItem = require('./YelpSearchItem');

var _YelpSearchItem2 = _interopRequireDefault(_YelpSearchItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YelpSearchList = function YelpSearchList(_ref) {
  var yelp = _ref.yelp;
  return yelp.search.map ? _react2.default.createElement(
    'ul',
    { className: 'list' },
    yelp.search.length ? yelp.search.map(function (item) {
      return _react2.default.createElement(_YelpSearchItem2.default, { item: item, key: item.id });
    }) : _react2.default.createElement(
      'li',
      { key: 'not_found' },
      'Not Found!'
    )
  ) : _react2.default.createElement(
    'div',
    { key: 'please_search' },
    'Input keyword to Search...'
  );
};

YelpSearchList.propTypes = {
  yelp: _propTypes2.default.object.isRequired
};

exports.default = YelpSearchList;