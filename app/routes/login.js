module.exports = function (app, passport) {
	// Login ---------------------------------------------------------------------
	app.get('/login', function(req, res) {
		res.render('login', {message: req.flash('loginMessage')});
	});

	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/profile',
		failureRedirect : '/login',
		failureFlash : true,
	}));
};