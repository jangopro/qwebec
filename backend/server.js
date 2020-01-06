const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// TODO node server refresh after making changes
// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', err => {
    console.error(`🙅 🚫 🙅 🚫 🙅 🚫 🙅 🚫 → ${err.message}`);
});

//import all our models
require('./models/Event');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes/index');
app.use('/', routes);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
