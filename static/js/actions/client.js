///////////////////////////////////////////////////////////////////////////////
//
// Actions
//
// Client actions go to the dispatcher.
// Client actions can come from the server or from the view.
//
///////////////////////////////////////////////////////////////////////////////

//// IMPORTS //////////////////////////////////////////////////////////////////

const shoe     = require('shoe');
const through  = require('through');
let Dispatcher = require('../dispatcher/dispatcher');

//// ACTIONS //////////////////////////////////////////////////////////////////

let Actions = {

  onNewImage(payload) {

    Dispatcher.onNewImage(payload);

  }

};

///////////////////////////////////////////////////////////////////////////////

// Re-entry point for actions that extend the flux loop to the server.

// extractImage :: Object message -> undefined
function extractImage(message) {

  let item = JSON.parse(message);

  if (!item.imgPath) { return console.log(item); }

  // This enables 'through' to manage flow.
  this.queue(item);

}

// Connect to server
let stream = shoe('/link');

// Read / write stream.
stream
  .pipe(through(extractImage))
  .pipe(through(Actions.onNewImage));

stream.write('Hello from client');

//// EXPORTS //////////////////////////////////////////////////////////////////

module.exports = Actions;

///////////////////////////////////////////////////////////////////////////////
