module.exports = function (app, passport) {
	// Register ------------------------------------------------------------------
	app.get('/register', function(req, res) {
		res.render('register', {message: req.flash('registerMessage')});
	});

    app.post('/register', passport.authenticate('local-register', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/register', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));
};