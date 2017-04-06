const express           = require('express');
const app               = express();
const apiKey            = process.env.API_KEY;

const bodyParser        = require('body-parser');
const bcrypt            = require('bcrypt');
const methodOverride    = require('method-override');
const logger            = require('morgan');
app.use(logger('dev'));


const resources              = require('./resources');
app.use(resources);

const path                   = require('path');
app.use(express.static(path.join(__dirname, 'public')));




const cors = require('cors');
app.use(cors());

const GoogleMapsLoader = require('google-maps');

const googleMapsClient = require('@google/maps').createClient({
  key: `${process.env.API_KEY}`
});



require('dotenv').config();
app.set('view engine', 'ejs');
app.set('views', './views');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(methodOverride('_method'));

app.use(require('./resources.js'));

const PORT                   = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Today\'s PORT will be', PORT);
});

module.exports = app;
