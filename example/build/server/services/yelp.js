'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _yelpV = require('yelp-v3');

var _yelpV2 = _interopRequireDefault(_yelpV);

var _yelpCfg = require('../../yelp.cfg.json');

var _yelpCfg2 = _interopRequireDefault(_yelpCfg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var yelp = new _yelpV2.default(_yelpCfg2.default);

// A good practice is reduce api results before you return it,
// then the response size of client side service execution will be smaller.
var services = {
  search: function search(params) {
    return params.term ? yelp.search(params).then(function (result) {
      return result.businesses ? result.businesses.map(function (B) {
        return {
          review_count: B.review_count,
          id: B.id,
          name: B.name,
          image_url: B.image_url
        };
      }) : [];
    }) : false;
  },
  business: {
    service: function service(params) {
      return yelp.businesses(params);
    },
    selector: function selector(B) {
      return {
        name: B.name,
        id: B.id,
        rating: B.rating,
        url: B.url,
        phone: B.phone,
        image_url: B.image_url
      };
    }
  }
};

exports.default = services;