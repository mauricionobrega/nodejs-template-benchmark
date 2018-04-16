var fs = require('fs');
var eco = require('eco');
var tplData;
var compiled;

exports.name = 'Eco';
exports.version = '1.1.0-rc-3';
exports.results = {};
exports.downloads = 2,335;
exports.contributors = 3;
exports.lastCommit = '6 years ago';
exports.syntax = 'HTML/Concise HTML/Text';
exports.clientSide = false;
exports.caching = false;
exports.asynchronous = false;
exports.contentBlocks = true;
exports.partials = false;
exports.inheritance = false;
exports.conditionals = true;
exports.controlWhitespace = false;
exports.imports = false;
exports.helpers = true;
exports.filters = false;
exports.specialChars = false;
exports.debugMode = false;
exports.streaming = false;
exports.autoescape = false;
exports.encode = true;

exports.prepare = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_escaped.eco', 'utf8');
  tplData = data;
  compiled = eco.compile(str);
  done();
};

exports.prepareUnescaped = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_unescaped.eco', 'utf8');
  tplData = data;
  compiled = eco.compile(str);
  done();
};

exports.step = function (done) {
  var html = compiled(tplData);
  done(undefined, html);
};
