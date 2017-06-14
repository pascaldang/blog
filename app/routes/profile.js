module.exports = function (app) {
	// Profile -------------------------------------------------------------------
	app.get('/profile/:id', function(req, res) {
		res.render('profile', {id: req.params.id});
	});
};