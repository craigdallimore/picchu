//
// Store
//
// ----------------------------------------------------------------------------

var twitterConfig = require('./config/twitter');

var twitter   = require('twitter'),
    instagram = require('instagram-node');
    //https://www.npmjs.org/package/instagram-node

var es = require('emit-stream');
var events = require('events');



var util = require('util');

// https://github.com/jdub/node-twitter
var twit = new twitter(twitterConfig);

var st;

// Fire up the tweet stream
twit.stream('filter', { track: 'streams' }, function(stream) {
  st = es.toStream(stream);
});

exports.tiles = st;

