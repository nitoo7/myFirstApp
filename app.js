
var express = require('express');
var app = express();
const bluebird = require('bluebird');
const _ = require('lodash');

//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/example');
//mongoose.connect('mongodb://example:example@ds053312.mongolab.com:53312/example);
//var Schema = mongoose.Schema;
//var movieSchema = new Schema({
//  title: String,
//  year: Number,
//  director: String,
//  rating: String
//});
//var Movie = mongoose.model('movie', movieSchema);

//var first = new Movie({
//  title: 'asdfasdd',
//  year: 123,
//  director: 'asdasd',
//  rating: 'asdasd'
//})

//first.save(function(err, data) {
//  if (err) return console.error(err);
//  console.log('***->'data);
//});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/details', function (req, res) {
var res = {"title": "JAWS",
    "year": "1951",
    "director": "Steven speilberg",
    "rating": "PG"}
  //Movie.findOne({}).exec().then(function(data){return res.send(data)})
return.send(res);
});

app.listen(process.env.PORT || 3000, function () {
  console.log('Example app listening on port 3000!');
});
