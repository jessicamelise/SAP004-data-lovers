import { sortByType, getFilterPokemon } from './data.js';
import { elements, creatNewDiv, escPopUp } from './elements.js';
import { loadApiPokemonAsync } from "./pokemonapi.js"

elements.pokedexTitle.addEventListener("click", function () {
  clean();
});

elements.cleanButton.addEventListener("click", function () {
  clean();
});

function clean () {
  elements.pokemonType.value = "";
  elements.pokemonEgg.value = "";
  elements.pokemonOrder.value = "";
  elements.searchField.value = "";
  showFilterCards();
}

function menuExhibit() {
  elements.menuField.classList.toggle("menu-exhibit");
  elements.mainHtml.classList.toggle("main-html");
  elements.headerShadow.classList.toggle("styling-header");
}

elements.menuButton.addEventListener("click", menuExhibit);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    elements.buttonScrollUp.style.display = "block";
  } else {
    elements.buttonScrollUp.style.display = "none";
  }
}

window.onscroll = function () { scrollFunction() };

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

elements.buttonScrollUp.addEventListener("click", topFunction);

elements.buttonEscPopUp.addEventListener("click", escPopUp);
elements.popUpBackGround.addEventListener("click", escPopUp);

elements.pokemonType.addEventListener("change", showFilterCards);

elements.pokemonEgg.addEventListener("change", showFilterCards);

elements.pokemonOrder.addEventListener("change", showFilterCards);

elements.searchField.addEventListener("keydown", event => {
  if (event.keyCode === 8) return showFilterCards()
  else showFilterCards()
})

async function showFilterCards() {
  let data = await loadApiPokemonAsync();

  let conditions = {
    type: elements.pokemonType.value,
    egg: elements.pokemonEgg.value,
    search: elements.searchField.value
  };

  if (elements.pokemonOrder.value === "id" || elements.pokemonOrder.value === "") {
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

  let pokemons = getFilterPokemon(conditions, data);
  elements.pokemonCard.innerHTML = ""
  creatNewDiv(pokemons);
}

showFilterCards();
