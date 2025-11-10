'use strict';

const number1 = parseInt(prompt('Please give the first number (integer).'))
const number2 = parseInt(prompt('Please give the second number (integer).'))
const number3 = parseInt(prompt('Please give the third number (integer).'))

const sum = number1 + number2 + number3
const product = number1 * number2 * number3
const average = (number1 + number2 + number3) / 3

document.querySelector('#target').innerHTML = `The sum of the given numbers is ${sum}, the product ${product}
 and the average ${average}.`;