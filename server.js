// Set Up ----------------------------------------------------------------------------------

var express = require('express');
var app = express();
var port = process.env.PORT || 4000;
var bodyParser = require('body-parser');

// Configuration ---------------------------------------------------------------------------

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: false}));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Routes ----------------------------------------------------------------------------------
//require('./app/routes.js')(app);
require('./app/routes/register.js')(app);
require('./app/routes/login.js')(app);
require('./app/routes/index.js')(app);
require('./app/routes/profile.js')(app);
require('./app/routes/error_404.js')(app);

// Connection MongoDB ----------------------------------------------------------------------
var mongoClient = require('mongodb').MongoClient;
var database  = 'mongodb://localhost/';

// Paramètres de connexion
console.log('Starting...');
// Connexion au serveur avec la méthode connect
mongoClient.connect(database, function (err, db) {
	console.log('Connecting...');
    if (err) {
        return console.error('Connection failed', err);
    }
    console.log('Connection successful on ', database);
});

// Listen ----------------------------------------------------------------------------------
app.listen(port);
console.log("App listening on port " + port);