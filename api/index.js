const https = require('https');

const get = (path, callback) => {
  return https.get({
    host: 'api.npmjs.org',
    path: path
  }, (response) => { // console.log('response: ', response)
      // Continuously update stream with data
      let body = '';
      response.on('data', (d) => {
        body += d;
      });
      response.on('end', () => {
        callback(JSON.parse(body));
      });
  });
};

// get('/downloads/point/last-month/', (response) => {
//   console.log(response);
// })

exports.npm = {
  get: get
}
