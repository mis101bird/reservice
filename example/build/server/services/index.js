'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _serviceList;

var _yelp = require('../actions/yelp');

var _yelp2 = require('./yelp');

var _yelp3 = _interopRequireDefault(_yelp2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// * You should define all services in serviceList,
// * If a service is not listed here, then it can not be executed by redux middleware.
// * The service name should be a service action type.
var serviceList = (_serviceList = {}, _defineProperty(_serviceList, _yelp.yelpSearch, _yelp3.default.search), _defineProperty(_serviceList, _yelp.yelpBusiness, _yelp3.default.business), _serviceList);

// * Export the full service list as default
exports.default = serviceList;