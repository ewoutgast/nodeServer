//server 1
var http = require("http");
var express = require('express');
var routes_v1 = require('./api/routes_v1');
//var routes_v2 = require('./api/routes_v2');

var bodyParser = require('body-parser');
var logger = require('morgan');

var app = express();


app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

app.use(logger('dev'));

app.use('/api/v1', routes_v1);
//app.use('/api/v2',routes_v2);

app.listen(process.env.PORT || 3000, function(){

	console.log('de server lusiter op port 3000');
});

module.exports =app;

/*
function onRequest(request, response){

	console.log("er is een request.");
	response.writeHead(200, {'content-type':'text/json'});
	var json = JSON.stringify({
		tekst: "hallo wolrd",
		andere: 'doei',
		object: {
			key: 'value'
		},
		array: [
			'value',
			'value'
		]
	});
	response.end(json);
	//response.writeHead(200, {'content-type':'text/plain'});
	//response.write('Hellow World!');
	//response.writeHead(200, {'content-type':'text/html'});
	//response.write('<h1>Hellow World!</h1>');
	//respone.end();
}

http.createServer(onRequest).listen(3000);

console.log('De server luistert op port 3000');
*/
