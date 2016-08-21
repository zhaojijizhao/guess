require('./main.scss');
require('./polyfill');
require('./font-awesome.css');

var utils = require('./utils')
var FastClick = require('fastclick');
document.addEventListener('DOMContentLoaded', function() {
  FastClick.attach(document.body);
}, false);

window.onunhandledrejection = function (rejection) {
  if (rejection.promise._d)
    console.error(rejection.promise._d.v.stack);
  else
    console.error(rejection.promise);
};

var reqwest = require('reqwest');
( _reqwest => {
  reqwest = ( ...args ) => {
    return new Promise(function (resolve, reject) {
      _reqwest( ...args ).then( resolve, reject );
    });
  };
} )( reqwest );

module.exports = {
  reqwest: reqwest,
  utils: utils
};