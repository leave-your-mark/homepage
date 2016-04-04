'use strict';

var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');


/********************************************************************
* CONFIGURATION
*********************************************************************/
var app = express();

// Setup bodyParser to let us parse POST data.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set the static files path to public.
app.use(express.static(path.join(__dirname, 'public')));

// Set the server-side view engine to html. Currently unused.
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

// Specify our default port.
var PORT = process.env.PORT || 3000;


/********************************************************************
* API ROUTING
*********************************************************************/

// Register router for api.
app.use('/api', require('./server/api/router'));


/********************************************************************
* RUN SERVER
*********************************************************************/
app.listen(PORT, function() {
  console.log('Listening to app on http://localhost:%s ', PORT);
});
