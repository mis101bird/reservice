'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

var _routing = require('../reducers/routing');

var _routing2 = _interopRequireDefault(_routing);

var _yelp = require('../reducers/yelp');

var _yelp2 = _interopRequireDefault(_yelp);

var _metaHeader = require('../reducers/metaHeader');

var _metaHeader2 = _interopRequireDefault(_metaHeader);

var _pageStatus = require('../reducers/pageStatus');

var _pageStatus2 = _interopRequireDefault(_pageStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({ routing: _routing2.default, yelp: _yelp2.default, metaHeader: _metaHeader2.default, pageStatus: _pageStatus2.default });