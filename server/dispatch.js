//
// Dispatch
//
// ----------------------------------------------------------------------------

//var tiles       = require('./store').tiles;
var shoe          = require('shoe');
var Transform     = require('stream').Transform;
var util          = require('util');
var twitterConfig = require('./config/twitter');
var twitter       = require('twitter');
var es            = require('emit-stream');

function Texter(options) {

  if(!(this instanceof Texter)) {
    return new Texter(options);
  }

  if (!options) { options = {}; }

  options.objectMode = true;

  Transform.call(this, options);

}

util.inherits(Texter, Transform);

Texter.prototype._transform = function(obj, enc, cb) {
  console.log(obj[1].text);
  this.push(obj[1].text);
  cb();
};

var textr = new Texter();

module.exports = function(server) {


  // https://github.com/jdub/node-twitter
  var twit = new twitter(twitterConfig);


  var sock = shoe(function(stream) {

    twit.stream('filter', { track: 'kitten' }, function(tweetStream) {

      es(tweetStream).pipe(textr).pipe(stream);

    });

    stream.write('Hello from server');

  });

  sock.install(server, '/link');

}

