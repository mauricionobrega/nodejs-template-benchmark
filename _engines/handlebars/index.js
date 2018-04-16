var fs = require('fs');
var Handlebars = require('handlebars');
var compiled;
var tplData;

exports.name = 'Handlebars';
exports.version = '4.0.11';
exports.results = {};
exports.downloads = 3,241.890;
exports.contributors = 140;
exports.lastCommit = '24 days ago';
exports.syntax = 'HTML/Concise HTML/Text';
exports.clientSide = true;
exports.caching = false;
exports.asynchronous = false;
exports.contentBlocks = true;
exports.partials = true;
exports.inheritance = false;
exports.conditionals = true;
exports.controlWhitespace = false;
exports.imports = false;
exports.helpers = true;
exports.filters = false;
exports.specialChars = false;
exports.debugMode = false;
exports.streaming = false;
exports.autoescape = true;
exports.encode = false;

exports.prepare = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_escaped.handlebars', 'utf8');
  tplData = data;
  compiled = Handlebars.compile(str);
  done();
};

exports.prepareUnescaped = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_unescaped.handlebars', 'utf8');
  tplData = data;
  compiled = Handlebars.compile(str);
  done();
};

exports.step = function (done) {
  var html = compiled(tplData);
  done(undefined, html);
};
