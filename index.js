const express = require('express');
const bodyParser = require('body-parser');

const { User } = require('./app/models');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

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

app.listen(3000);
