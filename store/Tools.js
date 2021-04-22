const mongoose = require('mongoose');

const toolSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	usage: {
		type: String,
	},
	tURL: {
		type: String,
	},
});

const Tools = mongoose.model('Tools', toolSchema);
module.exports = Tools;
