'use strict';

const name = prompt('Please state the name of the enrolling student.');
const house = Math.floor((Math.random() * 3) + 1);

switch (house) {
  case 1:
    document.querySelector(
        '#target').innerHTML = `${name}, you are a Gryffindor.`;
    break;
  case 2:
    document.querySelector(
        '#target').innerHTML = `${name}, you are a Slytherin.`;
    break;
  case 3:
    document.querySelector(
        '#target').innerHTML = `${name}, you are a Hufflepuff.`;
    break;
  case 4:
    document.querySelector(
        '#target').innerHTML = `${name}, you are a Ravenclaw.`;
    break;
}