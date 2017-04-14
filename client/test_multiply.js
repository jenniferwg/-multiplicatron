const multiply = require('./multiply.js');

function assertEquals(a, b) {
	console.log(a === b ? "Passed!" : "Expected " + a + " but returned " + b + ".");
};

//test standard multiplication cases
assertEquals(2, multiply(1,2));
assertEquals(144, multiply(12,12));
assertEquals(6, multiply(1,2,3));
assertEquals(24, multiply(1,2,3,4));

//test NaN scenarios
assertEquals(true, isNaN(multiply(1)));
assertEquals(true, isNaN(multiply()));

//test negative factors
assertEquals(-6, multiply(-1,2,3));
assertEquals(6, multiply(-1,-2,3));