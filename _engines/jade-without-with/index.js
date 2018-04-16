var fs = require('fs');
var jade = require('jade');
var compiled;
var tplData;

exports.name = 'Jade without "with"';
exports.version = '1.11.0';
exports.results = {};
exports.downloads = 643026;
exports.contributors = 116;
exports.lastCommit = '4 years ago';
exports.syntax = 'HTML/Concise HTML/Text';
exports.clientSide = true;
exports.caching = true;
exports.asynchronous = false;
exports.contentBlocks = true;
exports.partials = true;
exports.inheritance = true;
exports.conditionals = true;
exports.controlWhitespace = false;
exports.imports = true;
exports.helpers = true;
exports.filters = false;
exports.specialChars = false;
exports.debugMode = false;
exports.streaming = false;
exports.autoescape = false;
exports.encode = true;

exports.prepare = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_escaped.jade', 'utf8');
  tplData = data;
  compiled = jade.compile(str, { compileDebug: false, self: true });
  done();
};

exports.prepareUnescaped = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_unescaped.jade', 'utf8');
  tplData = data;
  compiled = jade.compile(str, { compileDebug: false, self: true });
  done();
};

exports.step = function (done) {
  var html = compiled(tplData);
  done(undefined, html);
};
