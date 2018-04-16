// INIT
const app = require('./app');
const samples = app.run();

console.log(`Tested Template Engines:\n\n`);

// CREATE TABLE.md
require('./table').create(samples)
