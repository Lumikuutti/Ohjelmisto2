'use strict';

async function random_joke() {
  let joke = await fetch(`https://api.chucknorris.io/jokes/random`);
  let response = await joke.json();
  console.log(response.value);
}

random_joke();