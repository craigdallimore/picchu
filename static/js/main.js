//
// Client - Main
//
// ----------------------------------------------------------------------------

var shoe    = require('shoe');
var through = require('through');

var stream = shoe('/link');

stream.pipe(through(function(msg) {

  console.log(msg);

}));

stream.write('Hello from client');
