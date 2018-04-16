var ECT = require('ect');
var renderer;
var tplData;
var tpl;

renderer = new ECT({ root: __dirname, cache: true, debug: true });

exports.name = 'ECT';
exports.version = '0.5.9';
exports.results = {};
exports.downloads = 1,877;
exports.contributors = 4;
exports.lastCommit = '4 years ago';
exports.syntax = 'HTML/Concise HTML/Text';
exports.clientSide = false;
exports.caching = true;
exports.asynchronous = false;
exports.contentBlocks = true;
exports.partials = true;
exports.inheritance = true;
exports.conditionals = true;
exports.controlWhitespace = false;
exports.imports = true;
exports.helpers = false;
exports.filters = false;
exports.specialChars = false;
exports.debugMode = false;
exports.streaming = false;
exports.autoescape = false;
exports.encode = true;

exports.prepare = function (data, done) {
  tplData = data;
  tpl = 'tpl_escaped.ect';
  renderer.render(tpl, tplData);
  done();
};

exports.prepareUnescaped = function (data, done) {
  tplData = data;
  tpl = 'tpl_unescaped.ect';
  renderer.render(tpl, tplData);
  done();
};

exports.step = function (done) {
  var html = renderer.render(tpl, tplData);
  done(undefined, html);
};
