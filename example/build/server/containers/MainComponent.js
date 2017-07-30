'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = require('react-redux');

var _yelp = require('../actions/yelp');

var _YelpSearchList = require('../components/YelpSearchList');

var _YelpSearchList2 = _interopRequireDefault(_YelpSearchList);

var _YelpBusiness = require('../components/YelpBusiness');

var _YelpBusiness2 = _interopRequireDefault(_YelpBusiness);

var _YelpSearch = require('../components/YelpSearch');

var _YelpSearch2 = _interopRequireDefault(_YelpSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routeMain = function routeMain(name) {
  switch (name) {
    case 'search':
      return function (_ref) {
        var yelp = _ref.yelp,
            query = _ref.query,
            onSubmit = _ref.onSubmit;
        return _react2.default.createElement(
          'div',
          { className: 'main' },
          _react2.default.createElement(_YelpSearch2.default, { query: query, onSubmit: onSubmit }),
          _react2.default.createElement(_YelpSearchList2.default, { yelp: yelp })
        );
      };
    case 'business':
      return function (_ref2) {
        var yelp = _ref2.yelp;
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { className: 'home', href: '/' },
            'Back to Home'
          ),
          _react2.default.createElement(_YelpBusiness2.default, { yelp: yelp })
        );
      };
    default:
      return function () {
        return _react2.default.createElement(
          'div',
          null,
          'Route not found'
        );
      };
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    Main: routeMain(state.routing.route.name),
    yelp: state.yelp,
    query: state.routing.route.query,
    loading: state.pageStatus.isLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onSubmit: function onSubmit(term) {
      return dispatch((0, _yelp.yelpSearch)({ term: term }));
    }
  };
};

var MainComponent = function MainComponent(_ref3) {
  var Main = _ref3.Main,
      yelp = _ref3.yelp,
      query = _ref3.query,
      loading = _ref3.loading,
      onSubmit = _ref3.onSubmit;
  return _react2.default.createElement(
    'div',
    null,
    loading ? _react2.default.createElement(
      'div',
      { className: 'loading' },
      'Now loading...'
    ) : _react2.default.createElement(Main, { yelp: yelp, query: query, onSubmit: onSubmit })
  );
};

MainComponent.propTypes = {
  Main: _propTypes2.default.func.isRequired,
  onSubmit: _propTypes2.default.func.isRequired,
  query: _propTypes2.default.object.isRequired,
  yelp: _propTypes2.default.object.isRequired,
  loading: _propTypes2.default.bool.isRequired
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MainComponent);