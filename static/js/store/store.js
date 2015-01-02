///////////////////////////////////////////////////////////////////////////////
//
// File store
//
///////////////////////////////////////////////////////////////////////////////

// TODO

// Remove dupes
// Inject new images at the top
// Prune images from the bottom

//// LIBS /////////////////////////////////////////////////////////////////////

const { Flux }               = require('delorean');
let   { eqProps, containsWith } = require('ramda');

//// HELPER ///////////////////////////////////////////////////////////////////

const CHANGE = 'change'; // the only constant is change.

let key = 0;

let state = {
  images : []
};

//// STORE ////////////////////////////////////////////////////////////////////

let Store = Flux.createStore({

  actions : {

    'onNewImage' : 'onNewImage'

  },

  onNewImage(payload) {

    console.log('payload', payload.imgPath);

    if (!containsWith(eqProps('imgPath'), payload, state.images)) {

      console.log('unique image');

      payload.key = ++key;
      state.images.unshift(payload);

      // Truncate to only 10 items.
      if (state.images.length > 10) {
        state.images.length = 10;
      }

      this.emit(CHANGE);
    }

  },

  getState() {

    return state;

  }

});

//// EXPORTS //////////////////////////////////////////////////////////////////

module.exports = new Store();

///////////////////////////////////////////////////////////////////////////////
