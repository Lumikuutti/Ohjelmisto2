'use strict';

const start = document.getElementById('start');

start.addEventListener('click', function(evt) {
  let calculation = document.getElementById('calculation').value;
  let result = 0;
  if (calculation.includes('+')) {
    calculation = calculation.split('+');
    for (let index of calculation) {
      let num = parseInt(index);
      result += num;
    }
  } else if (calculation.includes('-')) {
    calculation = calculation.split('-');
    for (let index of calculation) {
      let num = parseInt(index);
      if (index === calculation[0]) {
        result = num;
      } else {
        result -= num;
      }
    }
  } else if (calculation.includes('*')) {
    calculation = calculation.split('*');
    for (let index of calculation) {
      let num = parseInt(index);
      if (index === calculation[0]) {
        result = num;
      } else {
        result *= num;
      }
    }
  } else if (calculation.includes('/')) {
    calculation = calculation.split('/');
    for (let index of calculation) {
      let num = parseInt(index);
      if (index === calculation[0]) {
        result = num;
      } else {
        result /= num;
      }
    }
  } else {
    result = calculation;
  }
  document.querySelector('#result').innerHTML = (result);
});