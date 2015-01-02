///////////////////////////////////////////////////////////////////////////////
//
// Twitter resource
//
///////////////////////////////////////////////////////////////////////////////

//// IMPORTS //////////////////////////////////////////////////////////////////

var Twitter       = require('twitter'); // https://github.com/jdub/node-twitter
var twitterConfig = require('../config/twitter');
var Transform     = require('stream').Transform;
var util          = require('util');

//// Twitter Stream constructor ///////////////////////////////////////////////

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


var twit   = new Twitter(twitterConfig);
var stream = TwitStream();

//This makes an oAuth connection and returns a stream in the callback.
twit.stream('filter', { track: 'pug' }, function(tweetStream) {

  tweetStream.on('data', function(data) {
    var hasMedia = data.entities && data.entities.media && data.entities.media[0].media_url;

    if (hasMedia) {

      var url = data.entities.media[0].media_url;

      var twitterData = {
        'source'  : 'twitter',
        'tweet'   : data.text,
        'imgPath' : url
      };

      console.log(twitterData);

      stream.write(twitterData);

    }
  });

  tweetStream.on('error', console.error);

});

//// EXPORTS //////////////////////////////////////////////////////////////////

module.exports = stream;

///////////////////////////////////////////////////////////////////////////////
