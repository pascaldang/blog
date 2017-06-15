module.exports = function (app, passport) {
	// Profile -------------------------------------------------------------------
	app.get('/profile', function(req, res) {
		res.render('profile', {user: req.user});
	});
};