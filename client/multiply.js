const multiply = function() {
	if (arguments.length > 1) {
		return Array.prototype.reduce.call(arguments, (result, factor) => result * factor);
	} else {
		return NaN;
	}
};

module.exports = multiply;