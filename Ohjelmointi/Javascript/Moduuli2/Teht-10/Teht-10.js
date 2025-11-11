'use strict'

const list = []
const candidate = {
  name: '',
  votes: 0
}
const amount = parseInt(prompt('How many candidates are there?'))

for (let i = 0; i <= (amount-1); i += 1) {
  let name = prompt(`Name of candidate ${i+1}`)
  name.toUpperCase()
  candidate.name = name
  list[i] = candidate
}

const voters = parseInt(prompt('How many voters are there?'))
for (let j = 1; j<=voters; j +=1) {
  let vote = prompt('Give the name of the candidate you want to vote.')
  vote.toUpperCase()
  for (let x = 0; x<=(amount-1); x += 1) {
    if (list[x].name === vote) {
      list[x].votes += 1
    }
  }
}

console.log(list)