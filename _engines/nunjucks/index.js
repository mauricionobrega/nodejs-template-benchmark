const nunjucks = require('nunjucks');
const fs = require('fs');
let template, tplData;

exports.name = 'Nunjucks';
exports.version = '3.1.2';
exports.results = {};
exports.downloads = 105,795;
exports.contributors = 113;
exports.lastCommit = 'a month ago';
exports.syntax = 'HTML/Concise HTML/Text';
exports.clientSide = true;
exports.caching = true;
exports.asynchronous = true;
exports.contentBlocks = true;
exports.partials = true;
exports.inheritance = true;
exports.conditionals = true;
exports.controlWhitespace = false;
exports.imports = true;
exports.helpers = true;
exports.filters = true;
exports.specialChars = false;
exports.debugMode = true;
exports.streaming = false;
exports.autoescape = true;
exports.encode = true;

exports.prepare = function (data, done) {
  const str = fs.readFileSync(`${__dirname}/escaped.njk`, 'utf8');
  tplData = data;
  template = nunjucks.compile(str);
  done();
};

exports.prepareUnescaped = function (data, done) {
  const str = fs.readFileSync(`${__dirname}/unescaped.njk`, 'utf8');
  tplData = data;
  template = nunjucks.compile(str);
  done();
};

exports.step = function (done) {
  const html = template.render(tplData);
  done();
};
