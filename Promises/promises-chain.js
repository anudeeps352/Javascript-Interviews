//Input a number, double it, increase it by 10, and then multiply by 3.

const double = (value) => new Promise((resolve, reject) => resolve(value * 2));
const increase = (value) =>
  new Promise((resolve, reject) => resolve(value + 10));
const multiply = (value) =>
  new Promise((resolve, reject) => resolve(value * 3));

double(5)
  .then(increase)
  .then((value) => multiply(value))
  .then((value) => console.log(value))
  .catch(() => console.log('error'));
