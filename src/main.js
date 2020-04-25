import { filterData, sortData } from './data.js';
import data from './data/pokemon/pokemon.js';


let menuButton = document.getElementById("menu-click");
let menuField = document.getElementById("menu-field");
let pokemonCard = document.getElementById("pokemon-card");
let mainHtml = document.getElementById("main-html")
let buttonScrollUp = document.getElementById("button-up");
let divButtonScrollUp = document.getElementById("div-button-up");

function menuClick() {
  menuExhibit();
}

function menuExhibit() {
  menuField.classList.toggle("menu-exhibit");
  mainHtml.classList.toggle("main-html");
  divButtonScrollUp.classList.toggle("adjust-div-scroll")
}

menuButton.addEventListener("click", menuClick);

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonScrollUp.style.display = "block";
  } else {
    buttonScrollUp.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

buttonScrollUp.addEventListener("click", topFunction)

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

/* (verificar a necessidade dessa função, deu erro no teste)function catchTheValue() {
  let sel = document.getElementById("type");
  return console.log(sel.options[sel.selectedIndex].text);
}*/

searchButton[0].addEventListener("click", function () {
  showAllCards(filterData(data.pokemon, "id", 1));
})

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

filterPokemons();


/*(verificar a necessidade dessa função, deu erro no teste)function newArray () {
  let test1 = sortData(data.pokemon, "spawn_chance")
  return test1;
}*/

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

pokemonOrder();
