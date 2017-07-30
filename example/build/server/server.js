'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('isomorphic-fetch');

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _reservice = require('reservice');

var _reduxapp = require('./reduxapp');

var _routing = require('./actions/routing');

var _index = require('./services/index');

var _index2 = _interopRequireDefault(_index);

var _renderFullHtml = require('./lib/renderFullHtml');

var _renderFullHtml2 = _interopRequireDefault(_renderFullHtml);

var _routing2 = require('./routing');

var _routing3 = _interopRequireDefault(_routing2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// reservice need to access body as json
// * This is the default express application.
//   You can setup common middlewares for both
//   production or development environment here,
//   then export the express app.
// * You CAN NOT do anything related to development here,
//   please do development setup inside development.js.
// * You CAN NOT do any production only logic here,
//   please do production setup inside production.js.
// * You CAN NOT app.listen() here,
//   the port logic should be decided by
//   production.js or development.js
// * You can adopt polyfills here for only server side,
//   this file should not be bundled to client side.
// * You may need to add same polyfills to require in .nycrc file
//   or you will see error when you do npm test
// * You can not add polyfill for client side here
//   please add client side polyfill to pagePolyfills in webpack.config.js

// Adopt fetch polyfill
app.use(_bodyParser2.default.json());

// adopt reservice here
app.use((0, _reservice.createMiddlewareByServiceList)(_index2.default));

// Set up middleware for redux app to do server side rendering.
app.use(function (req, res, next) {
  var route = _routing3.default.getRoute(req.url, { method: req.method });

  if (!route) {
    return next();
  }

  var store = (0, _reduxapp.configureStore)();
  store.dispatch((0, _reservice.settleRequest)(req));
  store.dispatch((0, _routing.setRoute)(route));

  return route.config.handler(store, route).then(function () {
    return res.send((0, _renderFullHtml2.default)(store));
  }, function (err) {
    return next(err);
  });
});

exports.default = app;