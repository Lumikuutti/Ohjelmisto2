'use strict';

const start = document.getElementById('start');

start.addEventListener('click', function(evt) {
  let result = 0;
  const num1 = parseInt(document.getElementById('num1').value);
  const num2 = parseInt(document.getElementById('num2').value);
  const value = document.getElementById('operation').value;

  switch (value) {
    case 'add':
      result = num1 + num2;
      document.querySelector('#result').innerHTML = (result);
      break;
    case 'sub':
      result = num1 - num2;
      document.querySelector('#result').innerHTML = (result);
      break;
    case 'multi':
      result = num1 * num2;
      document.querySelector('#result').innerHTML = (result);
      break;
    case 'div':
      result = num1 / num2;
      document.querySelector('#result').innerHTML = (result);
      break;
  }
});