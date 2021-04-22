require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const { urlencoded, json } = require('express');

const app = express();

require('./config/github.strategy');
const port = process.env.PORT;

// User routes
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');

app.use(urlencoded({ extended: false }));
app.use(json());

// Set passport configs
app.use(
	require('express-session')({
		secret: 'shhhh...',
		resave: true,
		saveUninitialized: true,
	})
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);

//const router = require('./controllers/');
//app.use('/api', router);

const listener = app.listen(port, () => {
	console.log('Your app is listening on port ' + port);
});
