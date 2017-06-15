module.exports = function (app, passport) {
	app.get('/logout', function(req, res) {
		// Logout ---------------------------------------------------------------------
   		req.logout();
    	res.redirect('/');		
	});
};