'use strict';

const numbers = [];

for (let i = 1; i <= 5; i += 1) {
  let input = parseInt(prompt('Give me a number to store.'));
  numbers.push(input);
}

for (let j = 4; j >= 0; j -= 1) {
  console.log(numbers[j]);
}