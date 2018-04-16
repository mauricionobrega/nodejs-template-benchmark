// https://coderwall.com/p/f3qtoa/node-js-how-to-load-modules-recursively-from-directory
const fs = require('fs');
const path = require('path');
const samples = fs.readdirSync(__dirname).forEach((file) => {
  /* If its the current file ignore it */
  if (file === 'index.js' || file === '.DS_Store') return;

  /* Store module with its name (from filename) */
  exports[path.basename(file, '.js')] = require(path.join(__dirname, file));
  // TESTING ONCE TE
  // exports.gaikan = require('./gaikan');
});
