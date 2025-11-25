'use strict';

async function search(word) {
  try {
    const query = await fetch(
        `https://api.chucknorris.io/jokes/search?query=${word}`);
    return query.json();
  } catch (error) {
    document.querySelector(
        '#results').innerHTML = ('Something went wrong with the search!');
  }
}

const searchForm = document.querySelector('#search_form');
const results = document.getElementById('results');
searchForm.addEventListener('submit', async function(evt) {
  evt.preventDefault();
  let keyword = document.querySelector('input[id=query]').value;
  let response = await search(keyword);
  let result = response.result;
  for (let item of result) {
    let article = document.createElement('article');
    let p = document.createElement('p');
    let joke = document.createTextNode(item.value);
    p.appendChild(joke);
    article.appendChild(p);
    results.appendChild(article);
  }
});