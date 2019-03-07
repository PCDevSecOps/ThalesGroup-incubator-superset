var proxyMiddleware = require('http-proxy-middleware');
var cli = require('./.angular-cli.json');

var baseHref = cli.apps && cli.apps.length > 0 ?  cli.apps[0].baseHref : '/';
var baseHrefNoTrailingSlash = baseHref.slice(0, baseHref.length - 1);

// matches any string that has last word as baseHrefNoTrailingSlash
var missingSlashRegEx = '^' + baseHrefNoTrailingSlash + '$';

// matches value of  variable baseHref literally with zero or more character in the end
var requestMatchRegEx = '^' + baseHref + '(.*)';

function proxyMiddlewareOptions(url) {
  var pathRewrite = {};
  pathRewrite[missingSlashRegEx] = baseHref;
  pathRewrite[requestMatchRegEx] = '/$1';

  var options = {
    target: url,                      // target host
    changeOrigin: true,               // needed for virtual hosted sites
    ws: true,                         // proxy websockets
    pathRewrite: pathRewrite
  };

  return options;
}

function proxy(url) {
  return proxyMiddleware(baseHrefNoTrailingSlash, proxyMiddlewareOptions(url));
}

module.exports = proxy;
