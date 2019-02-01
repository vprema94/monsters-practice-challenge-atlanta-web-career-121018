function getMonster() {
    let url = 'http://localhost:3000/monsters';
    return fetch(url).then(res => res.json())
  }
  
  function createMonster(name, age, description) {
    return fetch('http://localhost:3000/pokemon', {
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