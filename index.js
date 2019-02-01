document.addEventListener("DOMContentLoaded", setupPage)

function setupPage() {
//   addFormHandler()
  renderAllMonsters()
}

function addMonster (event) {
  event.preventDefault();
  let name = event.target.name.value
  let sprite = event.target.sprite.value
  createPokemon(name, sprite).then(renderPokemon)
}

function addFormHandler() {
  let form = document.querySelector("form");
  form.addEventListener('submit', addPokemon)
}

function renderAllMonsters() {
  getMonster().then(function (data) {
    data.forEach(renderMonster)
  })
}

function renderMonster(monster) {
  let container = document.querySelector("#monster-container")
  let element = monsterView(monster)
  container.appendChild(element)
}