module.exports = (sequelize, DataTypes) => {
	const Tool = sequelize.define('Tool', {
		name: DataTypes.STRING,
		description: DataTypes.STRING,
		source: DataTypes.STRING,
		URL: DataTypes.STRING,
	});

	return Tool;
};
