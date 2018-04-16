// UTILS
const utils = require('../utils'), hasOwn = Object.prototype.hasOwnProperty;

// TEMPLATE ENGINES SAMPLES
const samples = require('../_engines');

// RUN
const run = () => {
  let i;
  for (i in samples) {
    if (hasOwn.call(samples, i)) {
      let item = samples[i];
      utils.test(item.name, item, (err, name, result) => {
        samples[i].results.escaped = result;
        utils.testUnescaped(item.name, item, (err, name, resultUnescaped) => {
          samples[i].results.unescaped = resultUnescaped;
          samples[i].results.total = result + resultUnescaped;
          console.log(`${name}`);
          console.log(`  Escaped   : ${result} ms`);
          console.log(`  Unescaped : ${resultUnescaped} ms`);
          console.log(`  Total     : ${(result + resultUnescaped)} ms \n\n`);
        });
      });
    }
  }

  return samples;
};

exports.run = run;
