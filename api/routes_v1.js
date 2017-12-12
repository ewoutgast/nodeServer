// routes_v1.js

var express = require('express');
var routes = express.Router();

var mijnObject = {
	tekst: 'hello world!'
};
routes.get('/hello', function(req, res){

	res.contentType('application/json');
	res.status(200);
	res.json(mijnObject);
});
routes.get('/goodbye', function(req, res){
	
	res.contentType('application/json');
	res.status(200);
	res.json({'tekst':'Goodbye!'});
});

routes.post('/hello', function(req, res){
	
	var body = req.body;
	console.dir(body);

	res.contentType('application/json');
	res.status(200);
	res.json(mijnObject);

});



module.exports = routes;