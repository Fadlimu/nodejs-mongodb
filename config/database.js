var mongoose = require('mongoose');

module.exports = function(envConfig){
	// register models
	require('./models/data');

	// connect to database
	mongoose.connect(envConfig.database, { useMongoClient: true }, function(){
		console.log('connected to database!')
	});

};