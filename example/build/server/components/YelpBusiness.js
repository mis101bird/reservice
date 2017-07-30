'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var YelpSearchBusiness = function YelpSearchBusiness(_ref) {
  var yelp = _ref.yelp;

  var item = yelp.business;
  return _react2.default.createElement(
    'div',
    { className: 'business' },
    _react2.default.createElement(
      'h2',
      null,
      item.name
    ),
    item.image_url ? _react2.default.createElement('img', { src: item.image_url, alt: 'main' }) : null,
    _react2.default.createElement(
      'p',
      null,
      _react2.default.createElement(
        'span',
        { key: 'rate' },
        'Rating: ' + item.rating
      ),
      _react2.default.createElement('br', null),
      _react2.default.createElement(
        'span',
        { key: 'phone' },
        'Phone: ' + item.phone
      )
    ),
    _react2.default.createElement(
      'a',
      { href: item.url },
      'View on yelp'
    )
  );
};

YelpSearchBusiness.propTypes = {
  yelp: _propTypes2.default.object.isRequired
};

exports.default = YelpSearchBusiness;