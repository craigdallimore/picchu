//
// Dispatch
//
// ----------------------------------------------------------------------------

var io = require('socket.io')();

// Make io aware of the server
module.exports = function(server) { io.listen(server); }

var tiles = require('./store').tiles;

// Emit tiles after a connection is made
io.on('connection', function(socket) {

  console.info('A client connected');

  socket.emit('tiles', tiles);

});


// How I would like this:
// - store connects to apis
// - streaaaam items
// - ioServer stream items to ioClient
// - react updates client awesomely
