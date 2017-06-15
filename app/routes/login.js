module.exports = function (app, passport) {
	// Login ---------------------------------------------------------------------
	app.get('/login', function(req, res) {
		res.render('login', {message: req.flash('loginMessage')});
	});

	app.post('/login', function(req, res) {
		var username = req.body.username;
		var password = req.body.password;

	})
};