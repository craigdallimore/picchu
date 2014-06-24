//
// Dispatch
//
// ----------------------------------------------------------------------------

var io        = require('socket.io')(),
    es        = require('event-stream');

// Make io aware of the server
module.exports = function(server) { io.listen(server); }

var tiles = require('./store').tiles;

// Emit tiles after a connection is made
io.on('connection', function(socket) {

  console.info('A client connected');
  //tiles._write = function(chunk, enc, next) {

    //console.log(chunk);
    //next();

  //};
  socket.emit('tiles', num);

});


// How I would like this:
// - store connects to apis
// - streaaaam items
// - ioServer stream items to ioClient
// - react updates client awesomely
