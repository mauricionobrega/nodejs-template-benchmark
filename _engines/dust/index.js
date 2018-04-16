var fs = require('fs');
var dust = require('dustjs-linkedin');
var compiled;
var tplData;

exports.name = 'Dust LinkedIn';
exports.version = '2.7.5';
exports.results = {};
exports.downloads = 16610;
exports.contributors = 37;
exports.lastCommit = '1 year ago';
exports.syntax = 'HTML/Concise HTML/Text';
exports.clientSide = true;
exports.caching = true;
exports.asynchronous = true;
exports.contentBlocks = true;
exports.partials = true;
exports.inheritance = true;
exports.conditionals = true;
exports.controlWhitespace = true;
exports.imports = true;
exports.helpers = true;
exports.filters = true;
exports.specialChars = true;
exports.debugMode = true;
exports.streaming = true;
exports.autoescape = true;
exports.encode = true;

exports.prepare = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_escaped.dust', 'utf8');
  tplData = data;

  compiled = dust.compile(str, 'test');
  dust.loadSource(compiled);

  done();
};

exports.prepareUnescaped = function (data, done) {
  var str = fs.readFileSync(__dirname + '/tpl_unescaped.dust', 'utf8');
  tplData = data;

  compiled = dust.compile(str, 'test');
  dust.loadSource(compiled);

  done();
};

exports.step = function (done) {
  dust.render('test', tplData, function(err, html) {
    done(err, html);
  });
};
