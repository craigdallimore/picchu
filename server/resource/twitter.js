//
// Twitter resource
//
// ----------------------------------------------------------------------------

var twitter       = require('twitter'); // https://github.com/jdub/node-twitter
var twitterConfig = require('../config/twitter');
var Transform     = require('stream').Transform;
var util          = require('util');

function TwitStream(options) {

  if(!(this instanceof TwitStream)) {
    return new TwitStream(options);
  }

  if (!options) { options = {}; }

  options.objectMode = true;

  Transform.call(this, options);

}

util.inherits(TwitStream, Transform);

TwitStream.prototype._transform = function(obj, enc, next) {
  this.push(JSON.stringify(obj)); // get the whole tweet
  next();
};


var twit   = new twitter(twitterConfig);
var stream = TwitStream();

stream.on('error', function(err) {
  console.warn('Error with tweet stream');
  console.warn(err);
});

//This makes an oAuth connection and returns a stream in the callback.
twit.stream('filter', { track: 'kitten' }, function(tweetStream) {

  tweetStream.on('data', function(data) {
    stream.write({ 'tweet': data.text });
  });

});

module.exports = stream;

