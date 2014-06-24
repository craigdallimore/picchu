//
// Store
//
// ----------------------------------------------------------------------------

var twitterConfig = require('./config/twitter');

var twitter   = require('twitter'),
    instagram = require('instagram-node');

var util = require('util');

var twit = new twitter(twitterConfig);


// Fire up the tweet stream
twit.stream('filter', { track: 'kitten' }, function(stream) {
  stream.on('data', function(data) {
    console.log(util.inspect(data.text));
  });
});

exports.tiles = [];

