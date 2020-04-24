import { filterData } from './data.js';
import data from './data/pokemon/pokemon.js';


let menuButton = document.getElementById("menu-click");
let menuField = document.getElementById("menu-field");
let pokemonCard = document.getElementById("pokemon-card");

function menuClick() {
  menuExhibit();
}

function menuExhibit() {
  menuField.classList.toggle("menu-exhibit");
}

menuButton.addEventListener("click", menuClick);

function creatNewDiv(itens) {
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

function showAllCards(pokemon) {
  pokemonCard.innerHTML = ""
  for (let list of pokemon) {
    let eachCard = creatNewDiv(list);
    pokemonCard.appendChild(eachCard);
  }
}

showAllCards(data.pokemon);

let popUpBackGround = document.getElementById("popup-brackground");
let popUpCard = document.getElementById("popup-card");

function popUpExhibit() {
  popUpBackGround.classList.add("popup-brackground-exhibit");
  popUpCard.classList.add("popup-card-exhibit");
}

let buttonEscPopUp = document.getElementById("popup-esc");

function escPopUp() {
  popUpBackGround.classList.remove("popup-brackground-exhibit");
  popUpCard.classList.remove("popup-card-exhibit");
}

buttonEscPopUp.addEventListener("click", escPopUp);

let descriptionPopUp = document.getElementById("description-popup");

function informationPopUp(position) {
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


let searchButton = document.querySelectorAll(".search-button");

function catchTheValue () {
  let sel = document.getElementById("type");
  return console.log(sel.options[sel.selectedIndex].text);
  }

  searchButton[0].addEventListener("click", function() {
    showAllCards(filterData(data.pokemon,"id", 1));
  })

  let typesOfPokemon = document.getElementById("type");

  typesOfPokemon.addEventListener('change', () => {
    if (typesOfPokemon.options[typesOfPokemon.selectedIndex].innerText === "Choose")  { 
      showAllCards(data.pokemon);} 
    
  else {
    showAllCards(filterData(data.pokemon,"type", typesOfPokemon.options[typesOfPokemon.selectedIndex].innerText))
  }
  })

  let eggs = document.getElementById("eggs");

  eggs.addEventListener('change', function () {
    if (eggs.options[eggs.selectedIndex].innerText === "Choose") {
      showAllCards(data.pokemon);
    }
    else {  showAllCards(filterData(data.pokemon,"egg", eggs.options[eggs.selectedIndex].innerText));
  }})