var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res){
   console.log('request was made: ' + req.url);
   res.writeHead(200, {'Content-Type': 'application/json'});
   var myObj = {
   	name: 'Tyler',
   	job: 'Pizza Slanger',
   	age: 22
   };
   	res.end(JSON.stringify(myObj));

});

server.listen(3000, '127.0.0.1');
console.log('Listening on port 3000');

