var stuff = require('./stuff');
var events = require('events');
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

myEmitter.on('someEvent', function(mssg){
	console.log(mssg);
	});

myEmitter.emit('someEvent', 'the event was emitted');