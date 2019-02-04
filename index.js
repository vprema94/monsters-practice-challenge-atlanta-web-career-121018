document.addEventListener("DOMContentLoaded", setupPage)
let page = 1;
let container = document.querySelector("#monster-container")

function setupPage() {
  addFormHandler()
  addButtonHander()
  renderAllMonsters()
} 
 
function addFormHandler() {
    let form = document.querySelector("form");
    form.addEventListener('submit', addMonster) 
}  

function addMonster (event) {
    event.preventDefault();
    let name = event.target.name.value
    let age = event.target.age.value
    let description = event.target.description.value
    createMonster(name, age, description).then(renderMonster)
}  

function createMonster(name, age, description) {
    return fetch(`http://localhost:3000/monsters`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            age: age,
            description: description
        })
    }).then(function (response) {
        return response.json()
    })
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

function renderAllMonsters() { 
    container.innerHTML = "" 
    getMonster().then(function (data) {
        data.forEach(renderMonster)
    })
} 

function getMonster() { 
    let url = `http://localhost:3000/monsters?_limit=50&_page=${page}`;
    return fetch(url).then(res => res.json())
}  

function renderMonster(monster) {
    let element = monsterView(monster)
    container.appendChild(element)
} 

function monsterView(monster) {
    let element = document.createElement('div')
    element.className = 'card' // element.classList.push('card')
    element.dataset.id = monster.id
        let monName = document.createElement('h2')
        monName.textContent = monster.name
        monName.className = 'center-text'
        element.appendChild(monName) 

        let monAge = document.createElement('h4')
        monAge.textContent = "Age: " + monster.age
        element.appendChild(monAge)

        let monDes = document.createElement('p')
        monDes.textContent = "Bio: " + monster.description
        element.appendChild(monDes)
    return element
}