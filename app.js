var express = require('express');
var app = express();
const bluebird = require('bluebird');
const _ = require('lodash');
var MongoClient = require('mongodb').MongoClient;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/details', function (req, res) {
  var desc = {"title":"abc","desc":"abc"}
  res.send('Hello World!');
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port 3000!');
});
