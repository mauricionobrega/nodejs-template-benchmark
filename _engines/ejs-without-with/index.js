var fs = require('fs');
var ejs = require('ejs');
var compiled;
var tplData;

exports.name = 'EJS Without "with"';
exports.version = '2.5.8';
exports.results = {};
exports.downloads = 1898633;
exports.contributors = 100;
exports.lastCommit = '18 hours ago';
exports.syntax = 'HTML/Concise HTML/Text';
exports.clientSide = true;
exports.caching = true;
exports.asynchronous = true;
exports.contentBlocks = false;
exports.partials = true;
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
exports.encode = true;

exports.prepare = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_escaped.ejs', 'utf8');
  tplData = data;
  compiled = ejs.compile(str, { _with: false });
  done();
};

exports.prepareUnescaped = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_unescaped.ejs', 'utf8');
  tplData = data;
  compiled = ejs.compile(str, { _with: false });
  done();
};

exports.step = function (done) {
  var html = compiled(tplData);
  done(undefined, html);
};
