require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const { urlencoded, json } = require('express');

const app = express();

require('./config/github.strategy');
const port = process.env.PORT;

app.use(urlencoded({ extended: false }));
app.use(json());

//const router = require('./controllers/');
//app.use('/api', router);

const listener = app.listen(port, () => {
	console.log('Your app is listening on port ' + port);
});
