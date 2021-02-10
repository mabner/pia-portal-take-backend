const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: false }));

// Entry point for the app
app.get('/', (req, res) => {
	res.send('Portal de Ferramentas para Data&Analytics');
});

app.listen(3000);
