module.exports = function (app) {
	// Accueil -------------------------------------------------------------------
	app.get('/', function(req, res) {
		res.render('index', {message: req.flash('registerMessage')});
	});
};