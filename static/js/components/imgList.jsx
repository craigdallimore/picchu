///////////////////////////////////////////////////////////////////////////////
//
// ImgList
//
///////////////////////////////////////////////////////////////////////////////

//// IMPORTS //////////////////////////////////////////////////////////////////

const { Flux }    = require('delorean');
const React       = require('react/addons');
let clientActions = require('../actions/client');

//// COMPONENT ////////////////////////////////////////////////////////////////

let ImgList = React.createClass({

  mixins : [ Flux.mixins.storeListener ],

  displayName : 'ImgList',

  render() {

    let { images } = this.getStore('store');

    var lis = images.map((item) => {

      return (

        /* jshint ignore:start */

        <li key={item.key}>
          <img src={ item.imgPath } width="300" alt="pic"/>
        </li>

        /* jshint ignore:end */

      );

    });

    return (

        /* jshint ignore:start */

        <ul className={'img-list'}>
          {lis}
        </ul>

        /* jshint ignore:end */

    );

  }

});

//// EXPORTS //////////////////////////////////////////////////////////////////

module.exports = ImgList;

///////////////////////////////////////////////////////////////////////////////
