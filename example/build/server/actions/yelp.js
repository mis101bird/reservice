'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.yelpBusiness = exports.yelpSearch = undefined;

var _reservice = require('reservice');

// Use createService(service_type, payload_creator) to create an action creator to run a service.
var yelpSearch = exports.yelpSearch = (0, _reservice.createService)('YELP_SEARCH', function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      term = _ref.term,
      _ref$location = _ref.location,
      location = _ref$location === undefined ? 'New York' : _ref$location,
      _ref$limit = _ref.limit,
      limit = _ref$limit === undefined ? 10 : _ref$limit,
      category_filter = _ref.category_filter;

  return { term: term, location: location, limit: limit, category_filter: category_filter };
}); // All action creators should follow Flux Standard Action
// please read https://github.com/acdlite/flux-standard-action
// In most time createService() is enough for almost every use cases
var yelpBusiness = exports.yelpBusiness = (0, _reservice.createService)('YELP_BUSINESS');