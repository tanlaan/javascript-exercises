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

function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}