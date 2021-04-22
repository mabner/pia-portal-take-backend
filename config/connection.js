const mongoose = require('mongoose');

//New Server Discover and Monitoring engine, removes the message about current being deprecated
mongoose.set('useUnifiedTopology', true);
//MongoDB connection
const connectionString = process.env.MONGO_ATLAS;

const openConnection = () =>
	mongoose.connect(connectionString, { useNewUrlParser: true });

module.exports = {
	openConnection,
};
