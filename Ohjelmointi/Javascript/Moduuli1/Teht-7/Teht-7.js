'use strict';

const rolls = parseInt(prompt('How many dice shall we roll?'));
let result = 0;

for (let i = 1; i <= rolls; i += 1) {
  let number = Math.floor((Math.random() * 5) + 1);
  result += number;
}

console.log(`The sum of the dice is ${result}`);