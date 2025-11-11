'use strict';

function rollDice() {
  return Math.floor((Math.random() * 6) + 1);
}

let roll = 0;
while (roll !== 6) {
  roll = rollDice();
  document.querySelector('#target').innerHTML += `<li>${roll}</li>`;
}
