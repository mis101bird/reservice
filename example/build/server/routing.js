'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _routr = require('routr');

var _routr2 = _interopRequireDefault(_routr);

var _metaHeader = require('./actions/metaHeader');

var _yelp = require('./actions/yelp');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routing = new _routr2.default({
  search: {
    path: '/',
    handler: function handler(store, route) {
      return store.dispatch((0, _yelp.yelpSearch)(route.query));
    }
  },
  business: {
    path: '/business/:id',
    handler: function handler(store, route) {
      return store.dispatch((0, _yelp.yelpBusiness)(route.params.id)).then(function (action) {
        return store.dispatch((0, _metaHeader.setTitle)(action.payload.name));
      });
    }
  }
});

exports.default = routing;