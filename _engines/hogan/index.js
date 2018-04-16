var fs = require('fs');
var hogan = require('hogan.js');
var compiled;
var tplData;

exports.name = 'Hogan';
exports.version = '3.0.2';
exports.results = {};
exports.downloads = 59,174;
exports.contributors = 38;
exports.lastCommit = '3 years ago';
exports.syntax = 'HTML/Concise HTML/Text';
exports.clientSide = false;
exports.caching = false;
exports.asynchronous = false;
exports.contentBlocks = false;
exports.partials = true;
exports.inheritance = true;
exports.conditionals = true;
exports.controlWhitespace = false;
exports.imports = false;
exports.helpers = true;
exports.filters = false;
exports.specialChars = false;
exports.debugMode = false;
exports.streaming = false;
exports.autoescape = false;
exports.encode = false;

exports.prepare = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_escaped.hogan', 'utf8');
  tplData = data;
  compiled = hogan.compile(str);
  done();
};

exports.prepareUnescaped = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_unescaped.hogan', 'utf8');
  tplData = data;
  compiled = hogan.compile(str);
  done();
};

exports.step = function (done) {
  var html = compiled.render(tplData);
  done(undefined, html);
};
