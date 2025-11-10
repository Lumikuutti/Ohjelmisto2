'use strict';

const dice = parseInt(prompt('Give the number of dice.'));
const wantedSum = parseInt(
    prompt('Give the sum you want to know the probability of.'));
let sum = 0;
let correct = 0;

for (let i = 1; i <= 10000; i += 1) {
  for (let j = 1; j <= dice; j += 1) {
    let roll = Math.floor((Math.random() * 5) + 1);
    sum += roll;
  }
  if (sum === wantedSum) {
    correct += 1;
    sum = 0;
  } else {
    sum = 0;
  }

}

const probability = ((correct / 10000) * 100).toFixed(2);

document.querySelector(
    '#target').innerHTML = (`Probability to get a sum of ${wantedSum} with ${dice} is ${probability}%.`);