let heroes = [
    {
        Photo: 'pic/Rectangle37.jpg',
        Name: 'Hermione Grander',
        Actor: 'Emma Watson',
        Gender: 'female',
        House: 'Gryffindor',
        Wandcore: 'dragon hearstring',
        Alive: 'yes',
    },
    {
        Photo: 'pic/Rectangle38.jpg',
        Name: 'Draco Malfoy',
        Actor: 'Tom Felton',
        Gender: 'male',
        House: 'Slytherin',
        Wandcore: 'unicorn tail-hair',
        Alive: 'yes',
    }, 
    {
        Photo: 'pic/Rectangle37.jpg',
        Name: 'Hermione Grander',
        Actor: 'Emma Watson',
        Gender: 'female',
        House: 'Gryffindor',
        Wandcore: 'dragon hearstring',
        Alive: 'yes',
    },
    {
        Photo: 'pic/Rectangle38.jpg',
        Name: 'Draco Malfoy',
        Actor: 'Tom Felton',
        Gender: 'male',
        House: 'Slytherin',
        Wandcore: 'unicorn tail-hair',
        Alive: 'yes',
    }, 
]

for (let i = 0; i < heroes.length; i++) {
    let card = `
    <div class="main__card">
        <div class="card_image">
            <img src="${heroes[i].Photo}" alt="${heroes[i].Name}">
        </div>
        <div class="card_content">
            <h3 class="font font_h3">${heroes[i].Name}</h3>
            <p>Actor: ${heroes[i].Actor}</p>
            <p>Gender: ${heroes[i].Gender}</p>
            <p>House: ${heroes[i].House}</p>
            <p>Wand core: ${heroes[i].Wandcore}</p>
            <p>Alive: ${heroes[i].Alive}</p>
        </div>
    </div>
    `

    let hero = document.createElement('div')
    hero.className = 'main__card'
    hero.innerHTML = card
    document.getElementById('main_grid').append(hero)
}