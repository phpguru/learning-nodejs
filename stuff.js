module.exports.randomizer = function(maximum) {
	return Math.round(Math.random()*maximum);
};

module.exports.adder = function(a,b){
		return `The sum of 2 numbers is ${a+b}`;
};

module.exports.pi = 3.142;
