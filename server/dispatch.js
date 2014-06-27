//
// Dispatch
//
// ----------------------------------------------------------------------------

var tiles       = require('./store').tiles;
var shoe          = require('shoe');

module.exports = function(server) {

  shoe(tiles).install(server, '/link');

}

