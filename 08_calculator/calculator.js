const add = function (x, y) {
  return x + y;
};

const subtract = function (x, y) {
  return x - y;
};

const sum = function (arr) {
  return arr.reduce((tot, num) => (tot += num), 0);
};

const multiply = function (arr) {
  return arr.reduce((tot, num) => (tot *= num), 1);
};

const power = function (base, power) {
  return base ** power;
};

const factorial = function (num) {
  let total = 1;
  for (let i = 2; i <= num; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
