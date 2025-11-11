'use strict';

const numbers = [];
let unique = true;

while (unique) {
  let given = parseInt(prompt('Give me a unique number to store.'));
  if (numbers.includes(given)) {
    alert('You have already given this number before, the program will stop');
    unique = false;
  } else {
    numbers.push(given);
  }
}

numbers.sort((a, b) => a - b);
for (let number of numbers) {
  console.log(number);
}