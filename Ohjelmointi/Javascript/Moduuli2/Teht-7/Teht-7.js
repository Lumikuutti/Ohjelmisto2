'use strict';

function rollDice(sides) {
  return Math.floor((Math.random() * sides) + 1);
}

const diceSides = parseInt(prompt('How many sides are in the die?'));
let roll = 0;
while (roll !== diceSides) {
  roll = rollDice(diceSides);
  document.querySelector('#target').innerHTML += `<li>${roll}</li>`;
}
