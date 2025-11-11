'use strict';

const amount = parseInt(prompt('How many participants will there be?'));
const participants = [];
for (let i = 1; i <= amount; i += 1) {
  let name = prompt(`//Name of participant ${i}`);
  participants.push(name);
}

participants.sort();
for (let participant of participants) {
  document.querySelector('#target').innerHTML += `<li>${participant}</li>`;
}