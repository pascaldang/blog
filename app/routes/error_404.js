
module.exports = function (app) {
	// ERROR 404 -----------------------------------------------------------------
	app.use(function(req, res, next){
    	res.setHeader('Content-Type', 'text/plain');
    	res.send(404, 'Page introuvable !');
	});
};