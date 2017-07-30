'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = {
  'red': 'base__red___1dV3T'
};

var YelpSearch = function (_React$Component) {
  _inherits(YelpSearch, _React$Component);

  function YelpSearch(props) {
    _classCallCheck(this, YelpSearch);

    var _this = _possibleConstructorReturn(this, (YelpSearch.__proto__ || Object.getPrototypeOf(YelpSearch)).call(this, props));

    _this.state = { term: props.query.term || '' };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(YelpSearch, [{
    key: 'handleChange',
    value: function handleChange(event) {
      this.setState({ term: event.target.value });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();
      this.props.onSubmit(this.state.term);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'form',
        { action: '/', onSubmit: this.handleSubmit },
        _react2.default.createElement(
          'span',
          { className: style.red },
          'Search'
        ),
        _react2.default.createElement('input', { name: 'term', type: 'text', value: this.state.term, onChange: this.handleChange }),
        _react2.default.createElement('input', { type: 'submit', value: 'SEARCH' })
      );
    }
  }]);

  return YelpSearch;
}(_react2.default.Component);

YelpSearch.propTypes = {
  query: _propTypes2.default.object.isRequired,
  onSubmit: _propTypes2.default.func.isRequired
};

exports.default = YelpSearch;