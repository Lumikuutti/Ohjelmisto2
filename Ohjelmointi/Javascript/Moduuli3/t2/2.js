'use strict';

const list = ['First', 'Second', 'Third'];

const target = document.querySelector('#target');

for (let index of list) {
  //create the list element
  let li = document.createElement('li');
  //create the text that will be in the list element
  let text = document.createTextNode(`${index} item`);
  //append the text to the list item
  li.appendChild(text);
  //append the list item into the target ul
  target.appendChild(li);
}

const second = document.getElementsByTagName('li')[1];
second.classList.add('my-item');

