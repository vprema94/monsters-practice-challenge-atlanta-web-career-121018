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