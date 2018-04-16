var fest = require('fest');
var tplData;
var compiled;

exports.name = 'Fest';
exports.version = '0.12.1';
exports.results = {};
exports.downloads = 72;
exports.contributors = 16;
exports.lastCommit = '3 years ago';
exports.syntax = 'XML like';
exports.clientSide = false;
exports.caching = false;
exports.asynchronous = false;
exports.contentBlocks = false;
exports.partials = false;
exports.inheritance = false;
exports.conditionals = true;
exports.controlWhitespace = true;
exports.imports = true;
exports.helpers = false;
exports.filters = false;
exports.specialChars = false;
exports.debugMode = false;
exports.streaming = false;
exports.autoescape = false;
exports.encode = false;

exports.prepare = function (data, done) {
  var str = __dirname + '/tpl_escaped.fest';
  tplData = data;
  compiled = (new Function('return ' + fest.compile(str, {beautify: false}) ))();
  done();
};

exports.prepareUnescaped = function (data, done) {
  var str = __dirname + '/tpl_unescaped.fest';
  tplData = data;
  compiled = (new Function('return ' + fest.compile(str, {beautify: false}) ))();
  done();
};

exports.step = function (done) {
  var html = compiled(tplData);
  done(undefined, html);
};
