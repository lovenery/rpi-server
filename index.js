// modules
var express = require('express');
var app = express();
var http = require('http');
var bodyParser = require('body-parser');
// var mongoose = require('mongoose');
var dotenv = require('dotenv').config();
const morgan = require('morgan')

// setup
app.use(morgan('dev'))
app.use(require('./config/cors'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'))

// database
// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.DB_HOST);

// redis
const redis = require('./config/redis')
redis()

// view engine
app.set('views', require('path').join(__dirname, 'app/views'))
app.set('view engine', 'ejs')

// endpoints
const routes = require('./app/app.js')
routes(app)

// error handler
const error = require('./config/error.js')
error(app)

// server
var server = http.createServer(app);
server.listen(process.env.PORT);
console.log(`Server running on ${process.env.APP_URL}:${process.env.PORT}`);