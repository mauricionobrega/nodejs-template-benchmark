const count = 100000;
const data = require('./data');
const options = {
  name: null,
  callback: null
};
let i, start;

const done = (error, html) => {
  i++;
  if (i === count) {
    const now = Date.now();
    options.callback(null, options.name, now - start);
  }
}

exports.test = (name, sample, callback) => {
  i = 0;
  options.name = name;
  options.callback = callback;
  sample.prepare(data, () => {
    start = Date.now();
    for (let j = 0; j < count; j++) {
      sample.step(done);
    }
  });
};

exports.testUnescaped = (name, sample, callback) => {
  i = 0;
  options.name = name;
  options.callback = callback;
  sample.prepareUnescaped(data, () => {
    start = Date.now();
    for (let j = 0; j < count; j++) {
      sample.step(done);
    }
  });
};
