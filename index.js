const express = require('express');
const bodyParser = require('body-parser');

const { User } = require('./app/models');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

User.create({
	name: 'Marcos',
	email: 'marcos@abner.info.br',
	password: '123456',
});

// Entry point for the app
app.get('/', (req, res) => {
	res.send('Portal de Ferramentas para Data&Analytics');
});

app.listen(3000);
