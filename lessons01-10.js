var stuff = require('./stuff');
var events = require('events');
var util = require('util');
var fs = require('fs');

var readme = fs.readFileSync('sample.txt', 'utf8');

var readmemd = fs.readFile('README.md', 'utf8', function(err, data){
	console.log(data);
	fs.writeFileSync('writeme.txt', data);
});
console.log(readmemd);


var time = 0;
var name1 = "Geoff";
var name2 = "Brandon";
var list1 = ['Avu', 'Duke', 'Daisy'];
var petname;
var randomNumber;

function dynFnCaller(vari) {
	vari();
}

var myFunc = function () {
	console.log('Whoopee!!!');
};

console.log('Starting program...');

var timer = setInterval(function(){

	randomNumber = stuff.randomizer(100);
	console.log('Random Value is ' + randomNumber);
	if (randomNumber > 5 && randomNumber <= 10) {
		list1.push('Hummer');
	}

	console.log(stuff.adder(5,6));
	
	console.log(stuff.adder(stuff.pi,12));

	// Call dynamic function
	if (time === 3) {
		dynFnCaller(myFunc);
	}

	// More code comment
	petname = list1[time];
	if (typeof petname !== 'undefined') {
		console.log('I have a pet named '+ list1[time]);
	} 

	time = time + 1;

	console.log(time + ' seconds have passed'); // '1 seconds have passed'

	if ( ! (time > 7 && time < 9 && name1 === name2 ) )  {
		console.log('Whatup ' + name1 + ' and ' + name2 + '!!'); /* note here */
	} else {
		console.log('Numbers not seven blow.');
	}

	if (time > 9) {
		clearInterval(timer);
	}
}, 1000);


console.log(__dirname);
console.log(__filename);

var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(msg){
	console.log(msg);
});

myEmitter.emit('someEvent', 'The event was emitted.');

var Person = function(name) {
	this.name = name;
}

util.inherits(Person, events.EventEmitter);

var james = new Person('james');
var mary = new Person('mary');
var ryu = new Person('ryu');

var people = [james, mary, ryu];

people.forEach(function(person){
	person.on('speak', function(msg){
		console.log(person.name + ' said: '+ msg);
	});
});

james.emit('speak', 'hey dudes');
mary.emit('speak', 'shut up, james!');
ryu.emit('speak', 'lets get some curry');