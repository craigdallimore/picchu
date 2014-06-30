//
// Twitter transform
//
// Returns just the text of a tweet
// ----------------------------------------------------------------------------

var Transform = require('stream').Transform;
var util      = require('util');

function Plucker(options) {

  if(!(this instanceof Plucker)) {
    return new Plucker(options);
  }

  if (!options) { options = {}; }

  options.objectMode = true;

  Transform.call(this, options);

}

util.inherits(Plucker, Transform);

Plucker.prototype._transform = function(obj, enc, cb) {
  this.push(obj[1].text); // get the text or whatever
  cb();
};

module.exports = Plucker;
