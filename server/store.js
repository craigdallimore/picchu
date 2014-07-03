//
// Store
//
// ----------------------------------------------------------------------------

var tag           = 'kitten';
//var twitterStream = require('./resource/twitter');
var imgStream     = require('./resource/images');

exports.tiles = function(stream) {

  stream.write(JSON.stringify({ 'msg': 'Hello from server' }));

  imgStream.pipe(stream);

};

