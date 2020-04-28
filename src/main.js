import { filterData, sortData, searchPokemons } from './data.js';
import { menuExhibit,scrollFunction,showAllCards, escPopUp,  } from "./functions.js";
import data from './data/pokemon/pokemon.js';

let menuButton = document.getElementById("menu-click");
let buttonScrollUp = document.getElementById("button-up");
let pokedexTitle = document.getElementById("pokedex-title");
let buttonEscPopUp = document.getElementById("popup-esc");
let searchField = document.getElementById("search-field");
let searchButton = document.getElementById("search-button");

pokedexTitle.addEventListener("click", function () {
  showAllCards(data.pokemon);
})

menuButton.addEventListener("click", menuExhibit);

window.onscroll = function () { scrollFunction() };

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

buttonScrollUp.addEventListener("click", topFunction)

buttonEscPopUp.addEventListener("click", escPopUp);

function filterPokemons() {
  let typesOfPokemon = document.getElementById("type");

  typesOfPokemon.addEventListener('change', () => {
    if (typesOfPokemon.options[typesOfPokemon.selectedIndex].innerText === "Choose") {
      showAllCards(data.pokemon);
    }

    else {
      showAllCards(filterData(data.pokemon, "type", typesOfPokemon.options[typesOfPokemon.selectedIndex].innerText))
    }
  })

  let eggs = document.getElementById("eggs");

  eggs.addEventListener('change', function () {
    if (eggs.options[eggs.selectedIndex].innerText === "Choose") {
      showAllCards(data.pokemon);
    }
    else {
      showAllCards(filterData(data.pokemon, "egg", eggs.options[eggs.selectedIndex].innerText));
    }
  })
}

function pokemonOrder() {
  const mapFunction = () => {
    data.pokemon.map(item => {
      if (item["spawn_time"] === "00:00") {
        item["spawn_time"] = "N/A"
      }
    })
  }

  let orderData = document.getElementById("order");

  orderData.addEventListener('change', function () {
    let choiceOrder = orderData.options[orderData.selectedIndex].value;
    if (choiceOrder === "spawn_chance") {
      showAllCards(sortData(data.pokemon, "spawn_chance").reverse());
      mapFunction();
    }
    else if (choiceOrder === "spawn_chance_less") {
      showAllCards(sortData(data.pokemon, "spawn_chance"));
      mapFunction();
    }
    else if (choiceOrder === "name") {
      showAllCards(sortData(data.pokemon, choiceOrder))
      mapFunction();
    }
    else if (choiceOrder === "name_reverse") {
      showAllCards(sortData(data.pokemon, "name").reverse())
      mapFunction();
    }
    else if (choiceOrder === "spawn_time") {
      showAllCards(sortData(data.pokemon, "spawn_time").reverse());
      mapFunction();
    }
    else if (choiceOrder === "spawn_time_less") {
      showAllCards(sortData(data.pokemon, "spawn_time"));
      mapFunction();
    }
    else {
      showAllCards(data.pokemon)
    }
  })
}

searchButton.addEventListener("click", function click () {
  showAllCards(searchPokemons(data.pokemon, searchField.value));
});

searchField.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
  showAllCards(searchPokemons(data.pokemon, searchField.value));
  }
})

showAllCards(data.pokemon);

pokemonOrder();

filterPokemons();