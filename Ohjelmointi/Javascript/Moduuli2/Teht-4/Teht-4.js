'use strict';

let given = 1;
const numbers = [];

while (given !== 0) {
  given = parseInt(prompt('Give me a number or stop with 0.'));
  numbers.push(given);
}

numbers.sort((a, b) => a - b);
numbers.reverse();
for (let number of numbers) {
  console.log(number);
}