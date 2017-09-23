var express = require('express');
var exphbs  = require('express-handlebars');
var fs = require('fs');
var app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
	res.render('home');
});

app.get('/home', function(req, res){
	res.render('home');
});

app.get('/contact', function(req, res){
	res.render('contact');
});

app.get('/profile/:name', function(req, res){
	var data = {
		age: 46,
		job: 'guru',
		slogan: 'I <em>rock</em> the casbah',
		hobbies: [{hobby:'eating'}, {hobby:'fighting'}, {hobby:'fishing'}]
	};
	res.render('profile', {person: req.params.name, data: data});
});

/*
app.use(function (req, res, next) {
  res.status(404).sendFile(__dirname + '/404.html');
});
*/

app.listen(3000);