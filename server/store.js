//
// Store
//
// ----------------------------------------------------------------------------

var twitterConfig = require('./config/twitter');
var Plucker       = require('./pluckText')
var es            = require('emit-stream');

var twitter       = require('twitter'),
    instagram     = require('instagram-node');
    //https://www.npmjs.org/package/instagram-node

// https://github.com/jdub/node-twitter
var twit = new twitter(twitterConfig);


var pluckText = new Plucker();


exports.tiles = function(stream) {

  stream.write('Hello from server');

  twit.stream('filter', { track: 'kitten' }, function(tweetStream) {

    es(tweetStream)

      .pipe(pluckText)
      .pipe(stream);

  });

};

