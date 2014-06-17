//
// Routes module
//
// Only one route - an AngularJS SPA takes over routing once it is deployed
// to the browser.
//

module.exports = function(app) {

  // Index
  // --------------------------------------------------------------------------

  app.route('/')
    .get(index);

  function index(req, res) {

    res.render('index.jade');

  }

};
