'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YelpSearchItem = function YelpSearchItem(_ref) {
  var item = _ref.item;
  return _react2.default.createElement(
    'li',
    {
      className: 'item',
      onClick: function onClick() {
        return global.window.location.href = '/business/' + encodeURIComponent(item.id);
      } },
    _react2.default.createElement(
      'h2',
      null,
      item.name
    ),
    _react2.default.createElement(
      'p',
      null,
      'Review Count: ' + item.review_count
    ),
    _react2.default.createElement('img', { src: item.image_url, alt: 'photo' })
  );
};

YelpSearchItem.propTypes = {
  item: _propTypes2.default.object.isRequired
};

exports.default = YelpSearchItem;