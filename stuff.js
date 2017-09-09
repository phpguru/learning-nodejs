var randomizer = function(maximum) {
	var rndnum =  Math.round(Math.random()*maximum);
	return rndnum;
}	

var adder = function(a,b) {
	return `The Sum of the 2 numbers is ${a+b}`;
}

var pi = 3.142;

module.exports = {
	randomizer: randomizer,
	adder: adder,
	pi: pi
};