//
// Client - Main
//
// ----------------------------------------------------------------------------

var io = require('socket.io-client')(location.href);

io.on('connect', function(socket) {

  console.log('Connection made');

})

io.on('disconnect', function() {

  console.log('Connection broken');

});

io.on('tiles', function(items) {

  console.log(items);

});
