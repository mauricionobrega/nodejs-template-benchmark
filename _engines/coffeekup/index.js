const fs = require('fs');
const coffeekup = require('coffeekup');
let compiled;
let tplData;

exports.name = 'CoffeeKup';
exports.version = '0.3.1';
exports.results = {};
exports.downloads = 30;
exports.contributors = 2;
exports.lastCommit = '7 years ago';
exports.syntax = 'Short-hand HTML';
exports.clientSide = false;
exports.caching = true;
exports.asynchronous = false;
exports.contentBlocks = false;
exports.partials = false;
exports.inheritance = false;
exports.conditionals = true;
exports.controlWhitespace = false;
exports.imports = false;
exports.helpers = false;
exports.filters = false;
exports.specialChars = false;
exports.debugMode = false;
exports.streaming = false;
exports.autoescape = true;
exports.encode = false;

exports.prepare = (data, done) => {
  const str = fs.readFileSync(__dirname + '/tpl_escaped.coffeekup', 'utf8');
  tplData = data;
  compiled = coffeekup.compile(str);
  done();
};

exports.prepareUnescaped = (data, done) => {
  const str = fs.readFileSync(__dirname + '/tpl_unescaped.coffeekup', 'utf8');
  tplData = data;
  tplData.autoescape = true;
  compiled = coffeekup.compile(str);
  done();
};

exports.step = function (done) {
  const html = compiled(tplData);
  done(undefined, html);
};
