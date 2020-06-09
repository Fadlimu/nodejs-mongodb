var express = require('express');

module.exports = function(app){
	// register route controllers
	var main = require('../routes/main');
	var crud = require('../routes/crud');
	var crudRouter = express.Router();
	app.use('/crud', crudRouter);

	app.get('/', main.index);
	crudRouter.get('/', crud.all);
	crudRouter.get('/:id', crud.viewOne);
	crudRouter.post('/create', crud.create);
	crudRouter.post('/destroy/:id', crud.destroy);
	crudRouter.post('/edit/:id', crud.edit);
	crudRouter.post('/completed/:id', crud.completed);
};