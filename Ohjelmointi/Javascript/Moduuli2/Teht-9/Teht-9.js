'use strict';

const numbers = [6, 8, 5, 3, 7, 0, 1, 2, 13, 12];

function even(list) {
  const sorted = [];
  for (let item of list) {
    if (item % 2 === 0) {
      sorted.push(item);
    }
  }
  return sorted;
}

const evens = even(numbers);

for (let number of numbers) {
  document.querySelector('#original').innerHTML += `<li>${number}</li>`;
}
for (let even of evens) {
  document.querySelector('#evens').innerHTML += `<li>${even}</li>`;
}
