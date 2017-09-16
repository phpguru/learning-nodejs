var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log('Request was made '+ req.url);
	res.writeHead(200, {'Content-TYpe':'application/json'});
	var myObj = {
		name: 'Geoff',
		job: 'Guru',
		age: 46
	};
	res.end(JSON.stringify(myObj));
});

server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000');
