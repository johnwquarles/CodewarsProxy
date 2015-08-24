var express = require('express');
var app = express();

if (process.env.NODE_ENV !== 'production') {
  require('./lib/secrets');
}

var model = require('./models/codeWarsModel.js')

app.get('/codewarsJQ', function(req, res) {
  // enable cross-origin resource sharing
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  model.getMyData(function(err, response) {
    // send out JSON just as you received it.
    err ? res.send(err): res.send(response);
  });
});

app.get('/outOf', function(req, res) {
  // enable cross-origin resource sharing
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  model.getOutOf(function(err, response) {
    // send out JSON just as you received it.
    err ? res.send(err): res.send(response);
  });
});

app.use(function (err, req, res, next) {
  console.log('error', err.stack);
  res.status(500).send('Internal server error');
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Proxy listening at http://%s:%d', host, port);
});
