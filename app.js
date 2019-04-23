const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/APIPermission', {useNewUrlParser: true});

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/gestures',require('./routes/gestures'));

// Start the server
const port = process.env.PORT || 5002;
app.listen(port);
console.log('Server listening at '+port);
