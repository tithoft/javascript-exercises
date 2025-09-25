const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(array) {
  let total = 0;
	for (let i = 0; i < array.length; i++) {
    total = total + array[i];
  }
  return total;
};

const multiply = function(array) {
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    product = product * array[i];
  }
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let product = 1;
  for (let i = a; i > 0; i--) {
    product *= i;
  }
  return product;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
