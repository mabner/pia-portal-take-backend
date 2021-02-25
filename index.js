const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const { User } = require('./app/models');

const app = express();
require('./config/github.strategy');

// User.create({
// 	name: 'Marcos',
// 	email: 'marcos@abner.info.br',
// 	password: '123456',
// });

// JSON for Postman
// {
//     "name": "Marcos",
//     "email": "marcos@teste.info",
//     "password": "123456"
// }

// Entry point for the app
// app.get('/', (req, res) => {
// 	res.send('Portal de Ferramentas para Data&Analytics');
// });
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const logoutRouter = require('./routes/logout');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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


// Cadastra usuário
app.post('/adduser', async (req, res) => {
	const user = await User.create(req.body);
	res.json(user);
});

// Pesquisar usuário
app.get( '/user/:id', async ( req, res ) =>
{
	const users = await User.getById(req.params.id);
	res.send({users});
});

// Listar todos os usuário
app.get('/showusers', (req, res) => {
	res.json('Find all users');
});

app.put('/update/:id', (req, res) => {
	res.json('Update a user');
});

// Apagar usuário
app.delete('/delete/:id', (req, res) => {
	res.json('Delete a user');
});

app.listen(3001);
