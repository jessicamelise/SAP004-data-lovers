import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

let menuButton = document.getElementById("menu-click");
let menuField = document.getElementById("menu-field");

function menuClick() {
  menuExhibit();
}

function menuExhibit() {
  menuField.classList.toggle("exhibit");
}

menuButton.addEventListener("click", menuClick);

/*
let pokemonCard = document.getElementById("pokemon-card");

function showAllCards(poke) {
  let showPokemonCards = "";

  for (let i = 0; i < poke.length; i++) {
    let eachCard = `
    <div class="information-card">
      <aside class="image-pokemon">
        <img src="${poke[i].img}" alt="">
      </aside>
      <div class="description">
        <p>Number: ${poke[i].num}</p>
        <p>Name: ${poke[i].name}</p>
        <p>Type: ${poke[i].type.join(', ')}</p>
      </div>
    </div>`;
    showPokemonCards += eachCard;
  }
  return showPokemonCards;
}

pokemonCard.innerHTML += showAllCards(pokemonList.pokemon);*/


console.log(example, data);
