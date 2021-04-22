const express = require('express');
const router = express.Router();
const Tools = require('../store/Tools');

const { ensureAuthenticated } = require('../config/ensureAuthenticated');

router.get('/tools', ensureAuthenticated, async (req, res, next) => {
	res.render('tools', {
		title: 'Portal de Ferramentas',
		commentaries: await Tools.find({}),
	});
});

router.post('/tools', ensureAuthenticated, async (req, res, next) => {
	await Tools.create({
		name: req.query.name,
		description: req.query.description,
		usage: req.query.usage,
		tURL: req.query.tURL,
	});
	res.render('tools', {
		title: 'Portal de Ferramentas',
		commentaries: await Tools.find({}),
	});
});

module.exports = router;
