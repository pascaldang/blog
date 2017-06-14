// Récupération du client mongodb
var mongoClient = require('mongodb').MongoClient;
var database  = 'mongodb://localhost/';

module.exports = function (app) {
	// Register ------------------------------------------------------------------
	app.get('/register', function(req, res) {
		res.render('register');
	});

	app.post('/register', function(req, res) {
		mongoClient.connect(database, function(err, db) {
			if (err) throw err;

			var collection = db.collection('users');

			var user = {
				username: req.body.username,
				email: req.body.email,
				password: req.body.password
			};

			if (req.body.password == req.body.password_confirmation) {
				collection.insert(user, function(err, result) {
				if (err) {
					console.err('Insert failed', err);
				} else {
					res.redirect('/home');
					console.log(req.body.username+'add success', result);
				}
				db.close();
				});
			} else {
				console.log('Passwords dont match');
				res.redirect('/register');
				db.close();
			}
		});
	});
};