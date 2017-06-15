// Set Up ----------------------------------------------------------------------------------

var express 		= require('express');
var app 			= express();
var port 			= process.env.PORT || 4000;

var bodyParser 		= require('body-parser');
var cookieParser 	= require('cookie-parser');
var expressSession 	= require('express-session');

var mongoose 		= require('mongoose');
var passport 		= require('passport');
var flash    		= require('connect-flash');
var morgan       	= require('morgan');

var configDB 		= require('./config/database.js');

// Configuration ---------------------------------------------------------------------------
mongoose.connect(configDB.url);
app.use(express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(expressSession({secret: 'shhhhh'}));
app.use(bodyParser.urlencoded({ extended: false, saveUninitialized: false, resave: false}));
app.use(morgan('dev'));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Routes ----------------------------------------------------------------------------------
//require('./app/routes.js')(app);
require('./app/routes/register.js')(app, passport);
require('./app/routes/login.js')(app, passport);
require('./app/routes/index.js')(app, passport);
require('./app/routes/profile.js')(app, passport);
require('./app/routes/error_404.js')(app);

require('./config/passport')(passport); // pass passport for configuration

// Listen ----------------------------------------------------------------------------------
app.listen(port);
console.log("App listening on port " + port);