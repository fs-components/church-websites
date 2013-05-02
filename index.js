var load = require('load-script');

function ChurchWebsites (el, config) {
  if (config['effective-locale'] == "en") {
    load('https://edge.ldscdn.org/ml/globalheader/gh.js');
  } else {
    // Remove every class except for 'hide'
    el.className = 'hide';
  }
}

module.exports = function(el, config) {
  return new ChurchWebsites (el, config);
};
