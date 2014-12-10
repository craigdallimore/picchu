#
# Karma configuration
#
# ----------------------------------------------------------------------------

module.exports = (config) ->

  config.set

    basePath   : ''

    # Start these browsers, currently available:
    # - Chrome
    # - ChromeCanary
    # - Firefox
    # - Opera (has to be installed with `npm install karma-opera-launcher`)
    # - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    # - PhantomJS
    # - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)

    browsers: [

      #'Chrome',
      'PhantomJS'

    ]

    frameworks : [

      'mocha'
      'browserify'
      'sinon-chai'

    ]

    plugins : [ 'karma-*' ]

    preprocessors : {

      'static/js/**/*.js' : [ 'coverage' ]
      'test/spec/*'       : [ 'browserify' ]

    }

    browserify :

      watch : true

    files: [

      'static/js/**/*.js'
      'test/**/*spec.js'

    ]

    exclude: [ '**/*.swp' ]

    reporters: [

      'mocha'
      'coverage'

    ]

    coverageReporter: {

      reporters: [

        { type : 'lcov', dir : 'test/coverage/' }
        { type : 'text', dir : 'test/coverage/' }

      ]

      dir : 'test/coverage'

    }

    # webserver port
    port      : 9876

    # cli runner port
    runnerPort : 9100

    colors    : true

    logLevel  : config.LOG_INFO

    autoWatch : true

    captureTimeout: 60000

    # Continuous Integration mode
    # if true, it capture browsers, run tests and exit
    singleRun: false

