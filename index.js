document.addEventListener("DOMContentLoaded", setupPage)
let page = 1;
let container = document.querySelector("#monster-container")

function setupPage() {
  addFormHandler()
  addButtonHander()
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
    container.innerHTML = "" 
    getMonster().then(function (data) {
        data.forEach(renderMonster)
    })
}

function renderMonster(monster) {
  let element = monsterView(monster)
  container.appendChild(element)
}  

function addButtonHander() {
    let bkd = document.querySelector("#back")
    bkd.addEventListener('click', goBack)
    let fwd = document.querySelector("#forward")
    fwd.addEventListener('click', goFwd)
}

function goFwd() {
    page++ 
    renderAllMonsters()
} 

function goBack() {
    page--
    renderAllMonsters()
}