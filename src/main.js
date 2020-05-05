import { sortByType, getFilterPokemon} from './data.js';
import {elements, creatNewDiv, escPopUp} from './elements.js';
import data from './data/pokemon/pokemon.js';



elements.pokedexTitle.addEventListener("click", function click(){
    elements.pokemonType.value = "";
    elements.pokemonEgg.value = "";
    elements.pokemonOrder.value = "id"
    elements.searchField.value = ""
  showFilterCards();
});


function menuExhibit() {
  elements.menuField.classList.toggle("menu-exhibit");
  elements.mainHtml.classList.toggle("main-html");
  elements.divButtonScrollUp.classList.toggle("scroll-adjust");
}

elements.menuButton.addEventListener("click", menuExhibit);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    elements.buttonScrollUp.style.display = "block";
  } else {
    elements.buttonScrollUp.style.display = "none";
  }
}

window.onscroll = function() {scrollFunction()};

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

elements.buttonScrollUp.addEventListener("click", topFunction);

elements.buttonEscPopUp.addEventListener("click", escPopUp);

elements.pokemonType.addEventListener('change', showFilterCards);

elements.pokemonEgg.addEventListener('change', showFilterCards);

elements.pokemonOrder.addEventListener('change', showFilterCards);

elements.searchButton.addEventListener("click", showFilterCards);

function showFilterCards() {
  let conditions = {
    type: elements.pokemonType.value,
    egg: elements.pokemonEgg.value,
    search: elements.searchField.value
  };

  if (elements.pokemonOrder.value === "id") {
    conditions.sortBy = sortByType.numeric;
    conditions.isDesc = false;
  } else if (elements.pokemonOrder.value === "a_z") {
    conditions.sortBy = sortByType.alphabetic;
    conditions.isDesc = false;
  } else if (elements.pokemonOrder.value === "spawn_chance") {
    conditions.sortBy = sortByType.spawnChance;
    conditions.isDesc = false;
  } else if (elements.pokemonOrder.value === "spawn_time") {
    conditions.sortBy = sortByType.spawnTime;
    conditions.isDesc = false;
  } else if (elements.pokemonOrder.value === "id_reverse") {
    conditions.sortBy = sortByType.numeric;
    conditions.isDesc = true;
  } else if (elements.pokemonOrder.value === "a_z_reverse") {
    conditions.sortBy = sortByType.alphabetic;
    conditions.isDesc = true;
  } else if (elements.pokemonOrder.value === "spawn_chance_reverse") {
    conditions.sortBy = sortByType.spawnChance;
    conditions.isDesc = true;
  } else if (elements.pokemonOrder.value === "spawn_time_reverse") {
    conditions.sortBy = sortByType.spawnTime;
    conditions.isDesc = true;
  }
  let pokemons = getFilterPokemon(conditions, data.pokemon);
  elements.pokemonCard.innerHTML = ""
  for (let list of pokemons) {
    let eachCard = creatNewDiv(list);
    elements.pokemonCard.appendChild(eachCard);
  }
}

showFilterCards();
