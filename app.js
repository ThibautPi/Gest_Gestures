const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost/APIPGestures', {useNewUrlParser: true});

const app = express();

// Middlewares
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

// Routes
app.use('/sets',require('./routes/set'));
app.use('/classes',require('./routes/classes'));
app.use('/samples',require('./routes/samples'));

// Start the server
const port = process.env.PORT || 5002;
app.listen(port);
console.log('Server listening at '+port);
