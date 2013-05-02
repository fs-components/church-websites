var load = require('load-script');

function ChurchWebsites (el, config) {
  if (config['effective-locale'] == "en") {
    el.className = "churchWebsites"
    load('https://edge.ldscdn.org/ml/globalheader/gh.js');
  }
}

module.exports = function(el, config) {
  return new ChurchWebsites (el, config);
};
