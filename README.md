# Picchu

## Overview / TODO

This is a service and a website that will use the twitter and instagram APIs to find
pictures and display them on nice masonic grid.

## The service

- Should provide a websocket stream of 'current' images for a given topic
- A topic would be a hashtag or similar.
- Should probably be able to seed it with some pre-defined images.

E.g. socket.on('#doge', (doges) -> console.log(doges) );

- it would probably be wise to be able to remove items from the current stream!
- need to investigate the instagram api and twitter api

## The website

Has a wall view and an admin view, and probably and upload view ( for non-twitter/instagram users ).

Wall view is more or less to be expected: a grid of photographs.
A qr code to navigate to an upload page.


## The Tech


### Backend:

nodeJS 0.10/x +
Express 4.0
Socket.io 1?

Essentially the app will have a heap of images that it can provide - probably as a live updating JSON stream to the client.
On first load it will probably gather all the items from an instagram 'tag' and add them to the heap, likewise twitter, then subscribe to changes in both.
On update from either api, it will add the item to the heap and refresh the client.
Likewise, uploaded images need to go somewhere and be added to the queue.

#### Instagram API

The app will need to first gather all the images for a topic 'tag' and start subscribing.

https://github.com/teleportd/instagram-node
http://instagram.com/developer/realtime/

#### Twitter

https://github.com/desmondmorris/node-twitter
https://dev.twitter.com/docs/streaming-apis/connecting

#### Uploader

Will need to be able to receive uploaded images

#### Items

- URL
- author
- size
- message?

#### Resilience.

The application should be able to handle disconnection from an api without distrupting the item stream.
The admin should be notified and be able to reconnect (if it cannot reconnect automatically)

Uploads should be filtered to make sure they are valid image files.
Good error messages must be provided.

Warn admin if space is low.


## Requires

- [http://sass-lang.com/](SASS 3.3+) CSS preprocessor
- [http://gulpjs.com/](Gulp taskrunner) for managing SCSS and JS build tasks
- [http://nodejs.org/download/](NodeJS and NPM) to install node modules and to run Grunt
- [http://browserify.org/](Browserify) for dependency resolution and minification
- [http://karma-runner.github.io/0.12/index.html](Karma) A test runner

## Installation

- Install nodeJS and NPM if they are not already installed:

` yum install nodejs npm `

- Install these gems ( used for CSS preprocessing )

` gem install sass compass `

- Install these global node packages

```
npm install -g grunt-cli
npm install -g karma
npm install -g nodemon
npm install -g browserify
```

- Install local node packages

` npm install

- Run the gulp "sass" task

` gulp sass `

- To start the node server

` nodemon server.js `

- To start the Karma tests / coverage reporting

` karma start `

