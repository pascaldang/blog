var Article = require('../app/models/article');

module.exports = function(app, passport) {

	// Accueil -------------------------------------------------------------------
	app.get('/', isLoggedIn, function(req, res) {
		res.render('index', {message: req.flash('indexMessage'), user : req.user});
	});

	// Login ---------------------------------------------------------------------
	app.get('/login', function(req, res) {
		res.render('login', {message: req.flash('loginMessage'), user : req.user});
	});

	app.post('/login', passport.authenticate('local-login', {
		successRedirect : '/profile',
		failureRedirect : '/login',
		failureFlash : true,
	}));

	// Profile -------------------------------------------------------------------
	app.get('/profile', isLoggedIn, function(req, res) {
		res.render('profile', {user: req.user});
	});

	// Register ------------------------------------------------------------------
	app.get('/register', function(req, res) {
		res.render('register', {message: req.flash('registerMessage'), user : req.user});
	});

    app.post('/register', passport.authenticate('local-register', {
        successRedirect : '/', // redirect to the secure profile section
        failureRedirect : '/register', // redirect back to the signup page if there is an error
        failureFlash : true // allow flash messages
    }));

    // Blog ----------------------------------------------------------------------
    app.get('/blog', isLoggedIn, function(req, res) {
		Article.find({user_username: req.user.username}).select('title content').exec(function(err, articles) {
			if (err) throw err;
			console.log(articles);
			res.render('blog', {articles: articles, user: req.user});
		});
    });

    // Add Article ---------------------------------------------------------------
    app.get('/add', isLoggedIn, function(req, res) {
    	res.render('add', {user: req.user});
    });

    app.post('/add', isLoggedIn, function(req, res) {
    	var newArticle = new Article({
    		user_username: req.user.username,
    		title: req.body.title,
    		content: req.body.editeur,
    		updated_at: new Date(),
    	});

    	newArticle.save(function(err) {
    		if (err) throw err;
    		console.log("Article registered");
    	});
    	res.redirect('/blog');
    })

	
	// Logout --------------------------------------------------------------------
    app.get('/logout', function(req, res) {
   		req.logout();
    	res.redirect('/');	
	});

	// ERROR 404 -----------------------------------------------------------------
	app.use(function(req, res, next){
    	res.setHeader('Content-Type', 'text/plain');
    	res.send(404, 'Page introuvable !');
	});
};

// Fonction pour s'assurer qu'un utilisateur est log
function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('/login');
}