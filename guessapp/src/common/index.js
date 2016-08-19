require('font-awesome/css/font-awesome.css');
require('./main.scss');
require('./polyfill');

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

utils.setupMTStyleForTesting();

var api = require('axios').create({
  baseURL: utils.APIPrefix(),
  withCredentials: true
});
api.interceptors.response.use(function (resp) {
  if (resp.data.code != null) {
    if (resp.data.code == 200)
      return resp.data;
    else {
      var error = new Error(resp.data.msg);
      error.code = resp.data.code;
      throw error;
    }
  } else
    return resp;
}, function (e) {
  throw e;
});

module.exports = {
  api: api,
  utils: utils
};