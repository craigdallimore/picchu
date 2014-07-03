//
// Client - Main
//
// ----------------------------------------------------------------------------

var shoe    = require('shoe');
var through = require('through');
var React   = require('react');
var DOM     = React.DOM;

// Set up React
// ------------

var ImgList = React.createClass({

  getInitialState : function() {

    return {

      images: []

    };

  },

  displayName : 'DefaultComponent',

  render : function() {

    var lis = this.state.images.map(function(item) {

      var img = DOM.img({
        src: item.imgPath,
        width  : 100,
        alt    : 'Pic'
      });

      return DOM.li({ key: item.key }, img);

    });

    return DOM.ul({ className: 'img-list' }, lis);

  }

});

var imgList = new ImgList();

var root = React.renderComponent(imgList, document.body);

// Connect to server
// -----------------
var stream = shoe('/link');

var images = [];
var key = 1;

stream.pipe(through(function(msg) {

  var item = JSON.parse(msg);

  if (!item.imgPath) { return console.log(item); }

  item.key = key++;

  images.push(item);
  root.setState({ images: images });

}));


stream.write('Hello from client');
