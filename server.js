//
// Express 4.0 starter application
// http://scotch.io/bar-talk/expressjs-4-0-new-features-and-upgrading-from-3-0
//
// This starts a node webserver on either port 3000 or a number given
// in the environments PORT variable.
//
// View templates are written in Jade
// http://jade-lang.com/
//
// Routes are imported from server/routes.js
//

// Set up
// ----------------------------------------------------------------------------
var express    = require('express'),
  morgan       = require('morgan'),                     // request logger
  compression  = require('compression'),
  errorHandler = require('errorhandler'),
  app          = express(),
  env          = process.env.NODE_ENV || 'development',
  port         = process.env.PORT || 3000;

// Configuration
// ----------------------------------------------------------------------------

app.set('views', __dirname + '/server/views/');

// Gzip all the things
app.use(compression());

// Don't tell them who you are
app.disable('x-powered-by');

// Cache the things
var oneYear = 31557600000;

app.use(express.static(__dirname + '/src', { maxAge: oneYear }));
app.use(express.static(__dirname + '/',    { maxAge: oneYear }));

if (env === 'development') {

  app.use(morgan('dev'));
  app.use(errorHandler({ dumpExceptions: true, showStack: true }));

} else {

  app.use(morgan());
  app.use(errorHandler());

}

// Routes
// ----------------------------------------------------------------------------
require('./server/routes')(app);


// Launch express
// ----------------------------------------------------------------------------
var server = app.listen(port);
console.log('----------------------------------');
console.log('Node server listening on port ' + port);


// Start websocket
// ----------------------------------------------------------------------------
require('./server/dispatch')(server);




// Kaizen
