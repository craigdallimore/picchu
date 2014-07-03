//
// Image stream
//
// ----------------------------------------------------------------------------

var Transform = require('stream').Transform;
var util      = require('util');

// Stream constructor
// ------------------
function ImgStream(options) {

  if(!(this instanceof ImgStream)) {
    return new ImgStream(options);
  }

  if (!options) { options = {}; }

  options.objectMode = true;

  Transform.call(this, options);

}

util.inherits(ImgStream, Transform);

ImgStream.prototype._transform = function(obj, enc, next) {
  this.push(JSON.stringify(obj));
  next();
};

// Stream Instance
// ---------------
var stream = ImgStream();

stream.on('error', function(err) {
  console.warn('Error with img stream');
  console.warn(err);
});

setInterval(function() {

  var random = Math.ceil(Math.random() * 15);

  // This could be replaced by a call to fs?
  var path = '/img/' + random + '.jpg';

  stream.write({ 'imgPath': path });

}, 1800);


module.exports = stream;

