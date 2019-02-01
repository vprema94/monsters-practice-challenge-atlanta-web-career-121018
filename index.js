document.addEventListener("DOMContentLoaded", setupPage)

function setupPage() {
//   addFormHandler()
  renderAllMonsters()
}

function addMonster (event) {
  event.preventDefault();
  let name = event.target.name.value
  let age = event.target.age.value
  let description = event.target.description.value
  createMonster(name, age, description).then(renderMonster)
}

function addFormHandler() {
  let form = document.querySelector("form");
  form.addEventListener('submit', addMonster)
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