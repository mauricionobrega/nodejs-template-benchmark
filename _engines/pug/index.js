const fs = require('fs');
const pug = require('pug');
let compiled, tplData;

exports.name = 'Pug';
exports.version = '2.0.3';
exports.results = {};
exports.downloads = 214443;
exports.contributors = 240;
exports.lastCommit = '9 days ago';
exports.syntax = 'Short-hand HTML';
exports.clientSide = false;
exports.caching = false;
exports.asynchronous = false;
exports.contentBlocks = true;
exports.partials = true;
exports.inheritance = true;
exports.conditionals = true;
exports.controlWhitespace = true;
exports.imports = true;
exports.helpers = false;
exports.filters = true;
exports.specialChars = false;
exports.debugMode = true;
exports.streaming = false;
exports.autoescape = true;
exports.encode = true;

exports.prepare = function (data, done) {
  const file = fs.readFileSync(`${__dirname}/tpl_escaped.pug`, 'utf8');
  compiled = pug.compile(file);
  tplData = data;
  done();
};

exports.prepareUnescaped = function (data, done) {
  const file = fs.readFileSync(`${__dirname}/tpl_unescaped.pug`, 'utf8');
  compiled = pug.compile(file);
  tplData = data;
  done();
};

exports.step = function (done) {
  const html = pug.render(compiled, tplData, done);
};
