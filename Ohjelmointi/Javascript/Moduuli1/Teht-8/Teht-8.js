'use strict';

const start = parseInt(prompt('Give the start year for the list.'));
const end = parseInt(prompt('Give the end year for the list'));
let year = start;

while (year <= end) {
  if ((year % 4) === 0 && (year % 100) !== 0) {
    document.querySelector('#target').innerHTML += ("<li>" + year + "</li>");
    year += 1;
  } else if ((year % 100) === 0 && (year % 400) === 0) {
    document.querySelector('#target').innerHTML += ("<li>" + year + "</li>");
    year += 1;
  }
  else {
    year += 1;
  }
}