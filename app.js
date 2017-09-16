var http = require('http');
var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/loremipsum.txt', 'utf8');

myReadStream.on('data', function(chunk){
	console.log('new chunk received');
	console.log(chunk);
});

/*
var server = http.createServer(function(req, res){
	console.log('Request was made '+ req.url);
	res.writeHead(200, {'Content-TYpe':'text/plain'});
	res.end('Hey Ninjas!');
});

server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000');
*/