var http = require('http');
var fs = require('fs');
var myReadStream = fs.createReadStream(__dirname + '/loremipsum.txt', 'utf8');
var myWriteStream = fs.createWriteStream(__dirname + '/written.txt');

myReadStream.pipe(myWriteStream);


/*
var server = http.createServer(function(req, res){
	console.log('Request was made '+ req.url);
	res.writeHead(200, {'Content-TYpe':'text/plain'});
	res.end('Hey Ninjas!');
});

server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000');
*/