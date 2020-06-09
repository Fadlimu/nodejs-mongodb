var path = require('path');
var rootPath = path.normalize(__dirname + '/../'); // normalizes to base path

module.exports = {
	development: {
		rootPath: rootPath,
		database: 'mongodb://fadlico:FadliCo@fadlico-shard-00-00-llujq.gcp.mongodb.net:27017,fadlico-shard-00-01-llujq.gcp.mongodb.net:27017,fadlico-shard-00-02-llujq.gcp.mongodb.net:27017/uaspbd?ssl=true&replicaSet=fadlico-shard-0&authSource=admin&retryWrites=true&w=majority',
		port: process.env.PORT || 80
	},
	production: {
		rootPath: rootPath,
		database: 'mongodb://fadlico:FadliCo@fadlico-shard-00-00-llujq.gcp.mongodb.net:27017,fadlico-shard-00-01-llujq.gcp.mongodb.net:27017,fadlico-shard-00-02-llujq.gcp.mongodb.net:27017/uaspbd?ssl=true&replicaSet=fadlico-shard-0&authSource=admin&retryWrites=true&w=majority',
		port: process.env.PORT || 80
	}
};