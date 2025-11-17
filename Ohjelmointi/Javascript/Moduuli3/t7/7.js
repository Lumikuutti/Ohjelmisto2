'use strict';

const trigger = document.getElementById('trigger');
trigger.addEventListener('mouseover', function() {
  const img = document.getElementById('target');
  img.src = 'img/picB.jpg';
});

trigger.addEventListener('mouseout', function() {
  const img = document.getElementById('target');
  img.src = 'img/picA.jpg';
});