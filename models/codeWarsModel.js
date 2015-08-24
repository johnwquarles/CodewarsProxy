var request = require('request');

var url = 'https://www.codewars.com/api/v1/users/johnwquarles?access_key=' + process.env['CODEWARS_KEY'];

function getCWdata (cb) {
  request(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // pulls in JSON object (which is 'stringified'; that's what JSON is. Stringified = JSON, parsed = JS object)
      cb(null, body);
    } else {
      cb(error);
    }
  })
}

module.exports = getCWdata;
