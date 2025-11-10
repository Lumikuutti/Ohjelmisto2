'use strict';

const number = parseInt(prompt('Give me a number to check is it a prime one.'));
let prime = true;

for (let i = 2; i < number; i += 1) {
  if (number % i === 0) {
    prime = false;
    document.querySelector(
        '#target').innerHTML = (`The number ${number} is not a prime number`);
    break;
  }
}

if (prime) {
  document.querySelector(
      '#target').innerHTML = (`The number ${number} is a prime number`);
}