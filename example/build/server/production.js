'use strict';

var _server = require('./server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 80; // * This is main entry code for production.
// * You should add main: 'dist/production.js' in package.json,
//   all your ES6 code need to be transpiled
//   for production environment and be placed into dist/ .
// * You can do app.listen(port) here,
//   please write port logic for production only
// * You can add any production only codes here.
// * You CAN NOT add any extra for development environment here,
//   please add development related logic in src/dev.js
// * You CAN NOT using babel-register here,
//   it is for development only.


_server2.default.listen(port);