import data from './data/pokemon/pokemon.js';

const elementsHTML = {
    pokemonCard: document.getElementById("pokemon-card"),
    mainHtml: document.getElementById("main-html"),
    divButtonScrollUp: document.getElementById("div-button-up"),
    descriptionPopUp: document.getElementById("description-popup"),
    menuField: document.getElementById("menu-field"),
    popUpBackGround: document.getElementById("popup-brackground"),
    popUpCard: document.getElementById("popup-card"),
    buttonScrollUp: document.getElementById("button-up"),
    pokedexTitle: document.getElementById("pokedex-title"),
    buttonEscPopUp: document.getElementById("popup-esc"),
    searchField: document.getElementById("search-field"),
    searchButton: document.getElementById("search-button"),
    orderData: document.getElementById("order"),
    pokemonType: document.getElementById("type"),
    pokemonEgg: document.getElementById("eggs"),
    pokemonOrder: document.getElementById("order"),

    creatNewDiv: (item) => {
        let newDiv = document.createElement("div");
        newDiv.classList.add("information-card");
        newDiv.id = item.id;
        newDiv.innerHTML = `
            <aside class="image-pokemon">
            <img src="${item.img}" alt="${item.name}">
            </aside>
            <div class="description">
            <p>Number: ${item.num}</p>
            <p>Name: ${item.name}</p>
            <p>Type: ${item.type.join(', ')}</p>
            </div>
        `;
        let click = function () {
            popUpExhibit();
            informationPopUp(item.id - 1);
        }
        newDiv.addEventListener("click", click);
        return newDiv;
    },

    informationPopUp: (position) => {
        descriptionPopUp.innerHTML = "";
        let newDivPopUp = document.createElement("div");
        newDivPopUp.classList.add("inside-popup");
        newDivPopUp.innerHTML = `
        <h2>Pokemon Name: ${data.pokemon[position].name}</h2>
        <p class="image-popup-card"><img src="${data.pokemon[position].img}" 
        alt="${data.pokemon[position].name}"></p>
        <ul>
            <li>Height: ${data.pokemon[position].height}</li>
            <li>Weight: ${data.pokemon[position].weight}</li>
            <li>Type: ${data.pokemon[position].type.join(', ')}</li>
            <li>Candy: ${data.pokemon[position].candy}</li>
            <li>Egg: ${data.pokemon[position].egg}</li>
            <li>Spawn Chance: ${data.pokemon[position].spawn_chance}</li>
            <li>Spawn Time: ${data.pokemon[position].spawn_time}</li>
            <li>Weaknesses: ${data.pokemon[position].weaknesses.join(', ')}</li>
        </ul> 
        `;
        descriptionPopUp.appendChild(newDivPopUp);
        return popUpCard;
    }
}

export default elementsHTML;