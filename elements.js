import data from './data/pokemon/pokemon.js';

export const elements = {
    pokemonCard: document.getElementById("pokemon-card"),
    mainHtml: document.getElementById("main-html"),
    divButtonScrollUp: document.getElementById("div-scroll-up"),
    buttonScrollUp: document.getElementById("button-scroll-up"),
    menuField: document.getElementById("menu-field"),
    menuButton: document.getElementById("menu-click"),
    descriptionPopUp: document.getElementById("description-popup"),
    popUpBackGround: document.getElementById("popup-brackground"),
    popUpCard: document.getElementById("popup-card"),
    buttonEscPopUp: document.getElementById("popup-esc"),
    pokedexTitle: document.getElementById("pokedex-title"),
    searchField: document.getElementById("search-field"),
    searchButton: document.getElementById("search-button"),
    pokemonType: document.getElementById("type"),
    pokemonEgg: document.getElementById("eggs"),
    pokemonOrder: document.getElementById("order"),
    headerShadow: document.getElementById("styling-header")
}

export function creatNewDiv(item) {
    let newDiv = document.createElement("div");
    newDiv.classList.add("information-card");
    newDiv.id = item.id;
    newDiv.innerHTML = `
        <aside class="image-pokemon">
        <img src="${item.img}" alt="${item.name}" class="image-size">
        </aside>
        <div class="description">
        <p class="pokemon-name">${item.name}</p>
        <p>${item.num}</p>
        <p>${item.type.join(', ')}</p>
        </div>
    `;
    let click = function () {
        popUpExhibit();
        informationPopUp(item.id - 1);
    }
    newDiv.addEventListener("click", click);
    return newDiv;
}

function informationPopUp(position) {
    elements.descriptionPopUp.innerHTML = "";
    let newDivPopUp = document.createElement("div");
    newDivPopUp.classList.add("inside-popup");
    newDivPopUp.innerHTML = `
    <h2>${data.pokemon[position].name}</h2>
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
    elements.descriptionPopUp.appendChild(newDivPopUp);
    return elements.popUpCard;
}

function popUpExhibit() {
    elements.popUpBackGround.classList.add("popup-brackground-exhibit");
    elements.popUpCard.classList.add("popup-card-exhibit");
}

export function escPopUp() {
    elements.popUpBackGround.classList.remove("popup-brackground-exhibit");
    elements.popUpCard.classList.remove("popup-card-exhibit");
}
