///////////////////////////////////////////////////////////////////////////////
//
// Store
//
///////////////////////////////////////////////////////////////////////////////

var twitterStream = require('./resource/twitter');
//var imgStream     = require('./resource/images');

//// TODO /////////////////////////////////////////////////////////////////////

//// EXPORTS //////////////////////////////////////////////////////////////////

exports.tiles = function(stream) {

  stream.write(JSON.stringify({ 'msg': 'Hello from server' }));

  // imgStream.pipe(stream); // This should be a set of images from the file system
  twitterStream.pipe(stream); // A stream of images from twitter

  // Return messages from the client
  stream.pipe(process.stdout, { end: false });

};

///////////////////////////////////////////////////////////////////////////////
