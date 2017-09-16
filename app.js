var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
	console.log('Request was made '+ req.url);
	if (req.url === '/' || req.url === '/home') {
		res.writeHead(200, {'Content-Type':'text/html'});
		fs.createReadStream(__dirname + '/index.html').pipe(res);
	} else if (req.url === '/contact') {
		res.writeHead(200, {'Content-Type':'text/html'});
		fs.createReadStream(__dirname + '/contact.html').pipe(res);
	} else if (req.url === '/styles.css') {
		res.writeHead(200, {'Content-Type':'text/css'});
		fs.createReadStream(__dirname + '/styles.css').pipe(res);
	} else if (req.url === '/api/gurus') {
		res.writeHead(200, {'Content-Type':'application/json'});
		var gurus = [
		{name: 'Geoff', age: 46},
		{name: 'Brandon', age: 33},
		{name: 'Tyler', age: 22}
		];
		res.end(JSON.stringify(gurus));
	} else {
		res.writeHead(404, {'Content-Type':'text/html'});
		fs.createReadStream(__dirname + '/404.html').pipe(res);
	}
});

server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000');
