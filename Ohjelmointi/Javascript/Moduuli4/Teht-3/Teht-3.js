'use strict'

async function search(word) {
  try {
    const query = await fetch (`https://api.tvmaze.com/search/shows?q=${word}`)
    return query.json()
  } catch (error) {
    document.querySelector('#results').innerHTML = ('Something went wrong with the search!')
  }
}

const searchForm = document.querySelector('#search_form')
searchForm.addEventListener('submit', async function (evt){
  evt.preventDefault()
  let keyword = document.querySelector('input[id=query]').value;
  let response = await search(keyword)
  const results = document.getElementById('results')
  results.innerHTML = ""
  for (let item of response) {
  let article = document.createElement('article');
// image
  let img = document.createElement('img');
  img.src = item.show.image?.medium;
  img.alt = item.show.name;
// a element
  let a = document.createElement('a')
  a.href = item.show.url + 'target="_blank"'
//description
  let div = document.createElement('div')
  div.innerHTML = item.show.summary
//header
  let h2 = document.createElement('h2');
  let header = document.createTextNode(item.show.name);
  h2.appendChild(header);

//building of article
  article.appendChild(h2);
  article.appendChild(a);
  article.appendChild(img);
  article.appendChild(div)

  results.appendChild(article);
}})