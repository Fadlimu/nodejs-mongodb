
module.exports = {
	index: function(req, res) {
		res.render('main', { title: 'Simple CRUD using NodeJs and MongoDB' });
	}
};