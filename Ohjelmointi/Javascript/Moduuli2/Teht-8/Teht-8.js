'use strict';

const words = ['Team_Rocket', 'Jesse', 'James', 'Meowth', 'blasting_off_again'];

function concat(list) {
  let result = '';
  for (let item of list) {
    result += item;
    console.log(result);
  }
  return result;
}

const jumble = concat(words);
console.log(jumble);
document.querySelector('#target').innerHTML = (`${jumble}`);