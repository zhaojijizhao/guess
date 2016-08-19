var queryString = require('query-string');

class Utils {

  APIPrefix() {
    var prefix;
    var env = queryString.parse(location.search)._env_ || __ENV__;
    switch (env) {
      case 'product':
        prefix = 'http://m.dianping.com';
        break;
      case 'beta':
        prefix = 'http://m.51ping.com';
        break;
      case 'dev':
        prefix = `http://${__LOCAL_SERVER__}`;
        break;
      default:
        prefix = env;
        break;
    }
    return prefix;
  }

  setupMTStyleForTesting() {
    if (__ENV__ === 'dev' && this.bridge() === 11) {
      var fileref = document.createElement("link");
      fileref.setAttribute("rel", "stylesheet");
      fileref.setAttribute("type", "text/css");
      fileref.setAttribute("href", `./static/theme-mt.css`);
      document.getElementsByTagName("head")[0].appendChild(fileref);
    }
  }
}

module.exports = new Utils();