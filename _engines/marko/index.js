const marko = require('marko');
const options = {
  writeToDisk: false
}
let template, tplData;

exports.name = 'Marko';
exports.version = '4.9.6';
exports.results = {};
exports.downloads = 27497;
exports.contributors = 66;
exports.lastCommit = '12 days ago';
exports.syntax = 'HTML/Concise HTML/Text';
exports.clientSide = false;
exports.caching = true;
exports.asynchronous = true;
exports.contentBlocks = false;
exports.partials = true;
exports.inheritance = true;
exports.conditionals = true;
exports.controlWhitespace = true;
exports.imports = true;
exports.helpers = true;
exports.filters = false;
exports.specialChars = false;
exports.debugMode = false;
exports.streaming = true;
exports.autoescape = true;
exports.encode = true;

exports.prepare = function (data, done) {
  tplData = data;
  template = marko.load(`${__dirname}/escaped.marko`, options);
  done();
};

exports.prepareUnescaped = function (data, done) {
  tplData = data;
  template = marko.load(`${__dirname}/unescaped.marko`, options);
  done();
};

exports.step = function (done) {
  var html = template.renderToString(tplData, done);
};
