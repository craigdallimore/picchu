///////////////////////////////////////////////////////////////////////////////
//
// Main
//
//// TODO /////////////////////////////////////////////////////////////////////

// - gulp 4.0 (not releaaed yet)
// - fluxify the image adding
// - implement masonry

// - get instagram working
/*

  This is more involved than expected.
  Instagram requires a url it can post to in order to create a subscription.
  http://instagram.com/developer/realtime

  This means I'll need to run the app in production to test it out!
  Very unfortunate, so lets bring the pain forward.

  - create an instagram stream
  - expose it to the client!
  - distinguish between twitter and instagram photos on the client
  - clean up code
  - set up a new app on gandi
  - deploy to gandi
  - look at the app, confirm it works!

*/

// - clean up the extraction of twitter images
// - dynamic subscription topics
// - get image upload working
// - make an admin section:
// -- see all the images in the queue
// -- approve / prevent images from being shown
// -- see 'new' images
// - make image upload url (expose via qr code?)


//// IMPORTS //////////////////////////////////////////////////////////////////

const React    = require('react/addons');
let dispatcher = require('./dispatcher/dispatcher');
let ImgList    = require('./components/imgList.jsx');

//// SCENE ////////////////////////////////////////////////////////////////////

React.render(<ImgList dispatcher={ dispatcher }/>, document.body);

///////////////////////////////////////////////////////////////////////////////
