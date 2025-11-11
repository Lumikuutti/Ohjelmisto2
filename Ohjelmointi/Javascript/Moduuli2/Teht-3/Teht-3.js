'use strict';

const dogs = [];
for (let i = 1; i <= 6; i += 1) {
  let name = prompt(`Name of dog number ${i}`);
  dogs.push(name);
}

dogs.sort();
dogs.reverse();
for (let dog of dogs) {
  document.querySelector('#target').innerHTML += `<li>${dog}</li>`;
}