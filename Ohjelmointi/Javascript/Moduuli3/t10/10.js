'use strict';

const form = document.getElementById('source');
form.addEventListener('submit', function(evt) {
  evt.preventDefault();
  console.log(form);
  const first = form.firstname.value;
  const last = form.lastname.value;
  document.querySelector('#target').innerHTML = `Your name is ${first} ${last}`;
});