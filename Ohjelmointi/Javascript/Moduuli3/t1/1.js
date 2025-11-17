'use strict';

const list = ['First', 'Second', 'Third']
for (let index of list) {
  document.querySelector('#target').innerHTML += `<li>${index} item</li>`
}
