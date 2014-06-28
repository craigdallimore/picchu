//
// Store
//
// ----------------------------------------------------------------------------

var tag = 'kitten';

var twitterConfig = require('./config/twitter');
var instagramConfig = require('./config/instagram');

var Plucker       = require('./pluckText')
var es            = require('emit-stream');

var twitter       = require('twitter');
var instagram     = require('instagram-node').instagram();
    //https://www.npmjs.org/package/instagram-node

// https://github.com/jdub/node-twitter
var twit = new twitter(twitterConfig);


var pluckText = new Plucker();


exports.tiles = function(stream) {

  stream.write('Hello from server');

  //twit.stream('filter', { track: 'kitten' }, function(tweetStream) {

    //es(tweetStream)

      //.pipe(pluckText)
      //.pipe(stream);

  //});

};

//instagram.use(instagramConfig);
//instagram.tag(tag, function(err, result, limit) {
  //console.log('ig', result);
//});

//console.log('done');
