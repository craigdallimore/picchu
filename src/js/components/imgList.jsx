///////////////////////////////////////////////////////////////////////////////
//
// ImgList
//
///////////////////////////////////////////////////////////////////////////////

//// IMPORTS //////////////////////////////////////////////////////////////////

const { Flux }    = require('delorean');
const React       = require('react/addons');
const MasonryMixin = require('react-masonry-mixin');
let clientActions = require('../actions/client');

//// CONSTANTS ////////////////////////////////////////////////////////////////

const MASONRYREF = 'masonry-container';

//// COMPONENT ////////////////////////////////////////////////////////////////

let masonryOptions = {

  columnWidth  : 300,
  gutter       : 10,
  itemSelector : '.item'

};

let ImgList = React.createClass({

  mixins : [
    Flux.mixins.storeListener,
    MasonryMixin(MASONRYREF, masonryOptions)
  ],

  displayName : 'ImgList',

  render() {

    let { images } = this.getStore('store');

    var lis = images.map((item) => {

      console.log(item);

      return (

        /* jshint ignore:start */

        <li className="item" key={item.key}>
          <img src={ item.imgPath } width="300" alt="pic"/>
          <span className="source">{item.source}</span>
        </li>

        /* jshint ignore:end */

      );

    });

    return (

        /* jshint ignore:start */

        <ul ref={ MASONRYREF } className={'img-list'}>
          {lis}
        </ul>

        /* jshint ignore:end */

    );

  }

});

//// EXPORTS //////////////////////////////////////////////////////////////////

module.exports = ImgList;

///////////////////////////////////////////////////////////////////////////////
