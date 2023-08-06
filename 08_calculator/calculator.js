const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
  return x - y;
};

const sum = function(arr) {
  return arr.reduce((total, value) => total + value, 0);
};

const multiply = function(arr) {
  return arr.reduce((total, value) => total * value, 1);
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(x) {
  let product = 1;
  for (let i = 2; i <= x; i++) {
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
