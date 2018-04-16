var gaikan = require('gaikan');
var compiled;
var tplData;
gaikan.options.extensions = ['gaikan', 'html'];
gaikan.options.enableCompression = false;
gaikan.options.rootDir = __dirname;

exports.name = 'Gaikan';
exports.version = '2.0.2';
exports.results = {};
exports.downloads = 19;
exports.contributors = 2;
exports.lastCommit = '4 years ago';
exports.syntax = 'HTML/Concise HTML/Text';
exports.clientSide = false;
exports.caching = true;
exports.asynchronous = false;
exports.contentBlocks = false;
exports.partials = true;
exports.inheritance = false;
exports.conditionals = true;
exports.controlWhitespace = false;
exports.imports = true;
exports.helpers = false;
exports.filters = true;
exports.specialChars = false;
exports.debugMode = true;
exports.streaming = false;
exports.autoescape = true;
exports.encode = true;

exports.prepare = function (data, done) {
  tplData = data;
  compiled = gaikan.compileFromFile('tpl_escaped');
  done();
};

exports.prepareUnescaped = function (data, done) {
  tplData = data;
  compiled = gaikan.compileFromFile('tpl_unescaped');
  done();
};

exports.step = function (done) {
  var html = compiled(gaikan, tplData);
  done(undefined, html);
};
