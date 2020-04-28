import data from './data/pokemon/pokemon.js';
let pokemonCard = document.getElementById("pokemon-card");
let mainHtml = document.getElementById("main-html");
let divButtonScrollUp = document.getElementById("div-button-up");
let descriptionPopUp = document.getElementById("description-popup");
let menuField = document.getElementById("menu-field");
let popUpBackGround = document.getElementById("popup-brackground");
let popUpCard = document.getElementById("popup-card");
let buttonScrollUp = document.getElementById("button-up");

export const menuExhibit = () => {
    menuField.classList.toggle("menu-exhibit");
    mainHtml.classList.toggle("main-html");
    divButtonScrollUp.classList.toggle("adjust-div-scroll")
}

export const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        buttonScrollUp.style.display = "block";
    } else {
        buttonScrollUp.style.display = "none";
    }
}

const createNewDiv = itens => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("information-card");
    newDiv.id = itens.id;
    newDiv.innerHTML = `
        <aside class="image-pokemon">
        <img src="${itens.img}" alt="${itens.name}">
        </aside>
        <div class="description">
        <p>Number: ${itens.num}</p>
        <p>Name: ${itens.name}</p>
        <p>Type: ${itens.type.join(', ')}</p>
        </div>
    `;
    let click = function () {
        popUpExhibit();
        informationPopUp(itens.id - 1);
    }
    newDiv.addEventListener("click", click);
    return newDiv;
}

export const showAllCards = pokemon => {
    pokemonCard.innerHTML = ""
    for (let list of pokemon) {
        let eachCard = createNewDiv(list);
        pokemonCard.appendChild(eachCard);
    }
}

const popUpExhibit = () => {
    popUpBackGround.classList.add("popup-brackground-exhibit");
    popUpCard.classList.add("popup-card-exhibit");
}

export const escPopUp = () => {
    popUpBackGround.classList.remove("popup-brackground-exhibit");
    popUpCard.classList.remove("popup-card-exhibit");
}

const informationPopUp = position => {
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