var LocalStrategy   = require('passport-local').Strategy;
var User            = require('../app/models/user');

// expose this function to our app using module.exports
module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('local-register', new LocalStrategy({
        usernameField   : 'username',
        emailField      : 'email',
        passwordField   : 'password',
        passReqToCallback : true
    },
    function(req, username, password, done) {
        process.nextTick(function() {

        User.findOne({ 'username' :  username }, function(err, user) {
            if (err)
                return done(err);
            if (user) {
                return done(null, false, req.flash('registerMessage', 'Ce pseudo est déjà pris!'));
            } else {
                var newUser         = new User();

                newUser.username    = username;
                newUser.email       = req.body.email;
                newUser.password    = newUser.generateHash(password);

                newUser.save(function(err) {
                    if (err)
                        throw err;
                    return done(null, newUser, req.flash('indexMessage', 'Votre compte a été crée avec succès!'));
                });
            }
        });    
        });
    }));

    passport.use('local-login', new LocalStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, username, password, done) {
        User.findOne({ 'username' :  username }, function(err, user) {
            if (err)
                return done(err);
            if (!user)
                return done(null, false, req.flash('loginMessage', "Cet utilisateur n'existe pas"));
            if (!user.validPassword(password))
                return done(null, false, req.flash('loginMessage', 'Mauvais mot de passe'));
            return done(null, user);
        });
    }));
};