'use strict'

const searchForm = document.querySelector('#target')
searchForm.addEventListener('submit', async function search(evt){
  evt.preventDefault()
  let keyword = document.querySelector('input[id=query]').value;
  try {
    const query = await fetch (`https://api.tvmaze.com/search/shows?q=${keyword}`)
    const response = await query.json()
    console.log(response)
  } catch (error) {
    console.log(error.message)
  }
})