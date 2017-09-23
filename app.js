var express = require('express');
var exphbs  = require('express-handlebars');
var app = express();
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function(req, res){
	res.render('home');
});

app.get('/styles.css', function(req, res){
	res.sendFile(__dirname + '/styles.css');
});

app.get('/contact', function(req, res){
	res.sendFile(__dirname + '/contact.html');
});

app.get('/profile/:name', function(req, res){
	var data = {
		age: 46,
		job: 'guru',
		slogan: 'I <em>rock</em> the casbah'
	};
	res.render('profile', {person: req.params.name, data: data});
});


app.listen(3000);