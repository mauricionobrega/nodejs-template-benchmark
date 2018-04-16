const hasOwn = Object.prototype.hasOwnProperty;
const fs = require('fs');
const api = require('./api');
const name = 'TABLE.md';
const icons = {
  have: '✔',
  dontHave: '✖'
};
const locale = 'pt-BR';
const head = `# Comparative Table

| Template Engine | Version    | Escaped time (ms) | Unescaped time (ms) | NPM downloads  | Contributors | Last commit | Syntax         | Client-side support | Caching | Asynchronous | Content blocks | Partials | Inheritance | Conditionals | Control whitespace | Imports | Helpers | Filters | Special Characters | Debug Mode | Streaming | Auto-escape | Encode |
| :-------------: | :--------: | :---------------: | :-----------------: | :------------: | :----------: | :---------: | :------------: | :-----------------: | :-----: | :----------: | :------------: | :------: | :---------: | :----------: | :----------------: | :-----: | :-----: | :-----: | :----------------: | :--------: | :-------: | :---------: | :----: |`;
// let line = '| {{NAME}} | {{VERSION}} | {{DOWNLOADS}} | {{COLLABORATORS}} | {{ESCAPED}} | {{UNESCAPED}} | {{STATS}} | {{LASTCOMMIT}} | {{ASYNCHRONOUS}} | {{CONTENTBLOCKS}} | {{IMPORTS}} | {{HELPERS}} | {{SYNTAX}} | {{STREAMING}} | {{AUTOESCAPE}} |';
let table;
let samples;

const writeFile = () => {
  fs.writeFile(name, table, (error) => {
    if (error) {
      return console.log(error);
    }
    console.log(`The ${name} was saved!`);
  });
}

// const fetch = (path, callback) => { // '/downloads/point/last-month/'
//   let i = samples.length;
//   while (i--) {}
//   api.npm.get(path, (response) => {
//     console.log(response);
//   });
// };

const create = (samples) => {
  let newLine, required, item, i = 1;
  table = head;
  samples = samples;

  for (required in samples) {
    if (hasOwn.call(samples, required)) {
      item = samples[required];

      newLine = '\r\n';
      newLine += `| ${item.name}`;
      newLine += ` | ${item.version}`;
      newLine += ` | ${item.results.escaped.toLocaleString(locale)}`;
      newLine += ` | ${item.results.unescaped.toLocaleString(locale)}`;
      newLine += ` | ${item.downloads.toLocaleString(locale)}`;
      newLine += ` | ${item.contributors}`;
      newLine += ` | ${item.lastCommit}`;
      newLine += ` | ${item.syntax}`;
      newLine += ` | ${item.clientSide ? icons.have : icons.dontHave}`;
      newLine += ` | ${item.caching ? icons.have : icons.dontHave}`;
      newLine += ` | ${item.asynchronous ? icons.have : icons.dontHave}`;
      newLine += ` | ${item.contentBlocks ? icons.have : icons.dontHave}`;
      newLine += ` | ${item.partials ? icons.have : icons.dontHave}`;
      newLine += ` | ${item.inheritance ? icons.have : icons.dontHave}`;
      newLine += ` | ${item.conditionals ? icons.have : icons.dontHave}`;
      newLine += ` | ${item.controlWhitespace ? icons.have : icons.dontHave}`;
      newLine += ` | ${item.imports ? icons.have : icons.dontHave}`;
      newLine += ` | ${item.helpers ? icons.have : icons.dontHave}`;
      newLine += ` | ${item.filters ? icons.have : icons.dontHave}`;
      newLine += ` | ${item.specialChars ? icons.have : icons.dontHave}`;
      newLine += ` | ${item.debugMode ? icons.have : icons.dontHave}`;
      newLine += ` | ${item.streaming ? icons.have : icons.dontHave}`;
      newLine += ` | ${item.autoescape ? icons.have : icons.dontHave}`;
      newLine += ` | ${item.encode ? icons.have : icons.dontHave}`;
      newLine += ` |`;

      table += newLine;
      i++;
    }
  }

  writeFile();
};

exports.create = create;
