var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Set locals
	locals.section = 'portfolio';

	// Load the galleries by sortOrder
	view.query('things', keystone.list('Portfolio').model.find().sort('sortOrder'));

	// Render the view
	view.render('portfolio');

};
