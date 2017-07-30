'use strict';

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

var _webpack3 = require('../webpack.config');

var _webpack4 = _interopRequireDefault(_webpack3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// * This is main entry code for development.
// * When you run `npm start`, this script will be used
// * You can do app.listen(port) here,
//   please write port logic for development only.
// * You CAN NOT add any extra for production here,
//   please add production related logic in production.js
// * You can change NODE_ENV to development here

// Because this file is for development only,
// Add these eslint options
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */

var compiler = (0, _webpack2.default)(_webpack4.default);
var port = process.env.port || 3000;
var pwd = process.cwd();

// webpack-dev-middleware provide bundled entry files on the fly
_server2.default.use(require('webpack-dev-middleware')(compiler, {
  stats: {
    colors: true,
    cached: false,
    hash: false,
    assets: false,
    timings: false,
    chunks: false,
    version: false
  },
  publicPath: _webpack4.default.output.publicPath
}));

// webpack-hot-middleware deliver hotreload feature
_server2.default.use(require('webpack-hot-middleware')(compiler));

// Serve all other static files
_server2.default.use('/statics', _express2.default.static(pwd + '/statics'));

_server2.default.listen(port, function () {
  return console.log('Server start! Listening on port ' + port);
});