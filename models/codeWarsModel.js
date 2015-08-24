var request = require('request');

var userUrl = 'https://www.codewars.com/api/v1/users/johnwquarles?access_key=' + process.env['CODEWARS_KEY'];
var outOfUrl = 'https://www.codewars.com/api/v1/code-challenges/50654ddff44f800200000004?access_key=' + process.env['CODEWARS_KEY'];

var exp_obj = {};

exp_obj.getMyData  = function(cb) {
  request(userUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      // pulls in JSON object (which is 'stringified'; that's what JSON is. Stringified = JSON, parsed = JS object)
      cb(null, body);
    } else {
      cb(error);
    }
  })
}

exp_obj.getOutOf = function(cb) {
  request(outOfUrl, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      cb(null, body);
    } else {
      cb(error);
    }
  })
}

module.exports = exp_obj;
