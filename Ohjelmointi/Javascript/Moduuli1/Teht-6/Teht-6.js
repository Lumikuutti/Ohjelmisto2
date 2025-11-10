'use strict';

const calculate = confirm('Should I calculate the square root?');

if (calculate) {
  const number = parseFloat(
      prompt('Give the number you wish for me to calculate.'));
  if (number < 0) {
    document.querySelector(
        '#target').innerHTML = ('The square root of a negative number is not defined.');
  } else {
    const root = Math.sqrt(number);
    document.querySelector(
        '#target').innerHTML = (`The square root of ${number} is ${root}.`);
  }
} else {
  document.querySelector(
      '#target').innerHTML = ('The square root is not calculated.');
}