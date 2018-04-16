var fs = require('fs');
var _ = require('underscore');
var compiled;
var tplData;

exports.name = 'Underscore';
exports.version = '1.8.3';
exports.results = {};
exports.downloads = 4889009;
exports.contributors = 250;
exports.lastCommit = '5 days ago';
exports.syntax = 'HTML/Concise HTML/Text';
exports.clientSide = true;
exports.caching = false;
exports.asynchronous = false;
exports.contentBlocks = false;
exports.partials = false;
exports.inheritance = false;
exports.conditionals = false;
exports.controlWhitespace = false;
exports.imports = false;
exports.helpers = false;
exports.filters = false;
exports.specialChars = false;
exports.debugMode = false;
exports.streaming = false;
exports.autoescape = true;
exports.encode = false;

exports.prepare = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_escaped.html', 'utf8');
  tplData = data;
  compiled = _.template(str);
  done();
};

exports.prepareUnescaped = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_unescaped.html', 'utf8');
  tplData = data;
  compiled = _.template(str);
  done();
};

exports.step = function (done) {
  var html = compiled(tplData);
  done(undefined, html);
};
