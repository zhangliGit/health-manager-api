var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var errorApi = require('./apiServer/error');
var venueApi = require('./apiServer/app/venue');
var placeApi = require('./apiServer/app/place');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/health/app', venueApi);
app.use('/health/app', placeApi);
app.use('*', errorApi);

module.exports = app;
