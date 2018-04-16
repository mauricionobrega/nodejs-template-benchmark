var fs = require('fs');
var dot = require('dot');
var compiled;
var tplData;

exports.name = 'doT';
exports.version = '1.1.2';
exports.results = {};
exports.downloads = 62,156;
exports.contributors = 13;
exports.lastCommit = '11 months ago';
exports.syntax = 'HTML/Concise HTML/Text';
exports.clientSide = false;
exports.caching = false;
exports.asynchronous = false;
exports.contentBlocks = true;
exports.partials = false;
exports.inheritance = false;
exports.conditionals = true;
exports.controlWhitespace = true;
exports.imports = false;
exports.helpers = false;
exports.filters = false;
exports.specialChars = false;
exports.debugMode = false;
exports.streaming = true;
exports.autoescape = false;
exports.encode = true;

exports.prepare = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_escaped.dot', 'utf8');
  tplData = data;
  compiled = dot.template(str);
  done();
};

exports.prepareUnescaped = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_unescaped.dot', 'utf8');
  tplData = data;
  compiled = dot.template(str);
  done();
};

exports.step = function (done) {
  var html = compiled(tplData);
  done(undefined, html);
};
