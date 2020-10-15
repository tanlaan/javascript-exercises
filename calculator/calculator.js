function add (a, b) {
	return a + b
}

function subtract (a, b) {
	return a - b
}

function sum (nums) {
	return nums.reduce(((total, num) => total += num), 0)
}

function multiply (nums) {
	return nums.reduce(((total, num) => total *= num), 1)
}

function power(a, b) {
	return a ** b
}

function factorial(a) {
	if(a == 0){
		return 1
	}
	else {
		return a * factorial(a - 1)
	}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}