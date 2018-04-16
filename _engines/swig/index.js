const swig = require('swig');
let template, tplData;

exports.name = 'Swig';
exports.version = '1.4.2';
exports.results = {};
exports.downloads = 43,204;
exports.contributors = 140;
exports.lastCommit = '2 years ago';
exports.syntax = 'HTML/Concise HTML/Text';
exports.clientSide = true;
exports.caching = false;
exports.asynchronous = false;
exports.contentBlocks = true;
exports.partials = false;
exports.inheritance = true;
exports.conditionals = true;
exports.controlWhitespace = false;
exports.imports = true;
exports.helpers = false;
exports.filters = true;
exports.specialChars = false;
exports.debugMode = false;
exports.streaming = false;
exports.autoescape = true;
exports.encode = false;

exports.prepare = function (data, done) {
  tplData = data;
  template = swig.compileFile('swig/tpl_escaped.swig', {resolveFrom: __dirname});
  done();
};

exports.prepareUnescaped = function (data, done) {
  tplData = data;
  template = swig.compileFile('swig/tpl_unescaped.swig', {resolveFrom: __dirname});
  done();
};

exports.step = function (done) {
  const output = template(tplData);
  done(undefined, output);
};
