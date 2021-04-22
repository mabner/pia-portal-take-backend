require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

require('./config/github.strategy');
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//const router = require('./controllers/');
//app.use('/api', router);

const listener = app.listen(port, () => {
	console.log('Your app is listening on port ' + port);
});
