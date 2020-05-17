import { loadApiPokemonAsync } from "./pokemonapi.js"

export const elements = {
  graphicType: document.getElementById('graphic-type'),
  graphicEggs: document.getElementById('graphic-egg'),
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
  pokemonType: document.getElementById("type"),
  pokemonEgg: document.getElementById("eggs"),
  pokemonOrder: document.getElementById("order"),
  headerShadow: document.getElementById("styling-header"),
  cleanButton: document.getElementById("clean-button")
}

export function creatNewDiv(item) {
  item.map(item => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("information-card");
    newDiv.innerHTML = `
      <aside class="image-pokemon">
      <img src="${item.img}" alt="${item.name}" class="image-size">
      <audio id="${item.num}" src="https://pokemoncries.com/cries-old/${item.id}.mp3"></audio>
      </aside>
      <div class="description">
      <p class="pokemon-name">${item.name}</p>
      <p class="pokemon-id">${item.num}</p>
      <p>${item.type.map(t => `<span  class='${t} style-type'>${t}</span>`).join(' ')}</p>
      </div>
    `;
    elements.pokemonCard.appendChild(newDiv);
    let click = function () {
      document.getElementById(item.num).play();
      popUpExhibit();
      informationPopUp(item.id - 1);
    }
    newDiv.addEventListener("click", click);
    return newDiv;

  })
}

async function informationPopUp(position) {
  let pokemonJson = await loadApiPokemonAsync();
  elements.descriptionPopUp.innerHTML = "";
  let newDivPopUp = document.createElement("div");
  newDivPopUp.classList.add("inside-popup");
  newDivPopUp.innerHTML = `
    <h2>${pokemonJson[position].name}
      <spam id="${pokemonJson[position].id}-${pokemonJson[position].name}" class="audio-popup">
      <i class="material-icons">volume_up</i>
      <audio id="${pokemonJson[position].name}"
      src="https://pokemoncries.com/cries-old/${pokemonJson[position].id}.mp3"></audio>
      </spam>
    </h2>
    <p class="image-popup-card"><img src="${pokemonJson[position].img}" 
    alt="${pokemonJson[position].name}"></p>
    <ul class="list-popup">
      <li><b>Type:</b> ${pokemonJson[position].type.map(t => `
        <span  class='${t} style-type'>${t}</span>`).join(' ')}</li>
      <li><b>Height:</b> ${pokemonJson[position].height}</li>
      <li><b>Weight:</b> ${pokemonJson[position].weight}</li>
      <li><b>Candy:</b> ${pokemonJson[position].candy}</li>
      <li><b>Egg:</b> ${pokemonJson[position].egg}</li>
      <li><b>Spawn Chance:</b> ${pokemonJson[position].spawn_chance}</li>
      <li><b>Spawn Time:</b> ${pokemonJson[position].spawn_time}</li>
      <li><b>Weaknesses:</b> ${pokemonJson[position].weaknesses.map(t => `
        <span  class='${t} style-type'>${t}</span>`).join(' ')}</li>
    </ul> 
  `;
  
  elements.descriptionPopUp.appendChild(newDivPopUp);

  let spamSound = document.getElementById(`${pokemonJson[position].id}-${pokemonJson[position].name}`);
  let audioPokemons = document.getElementById(`${pokemonJson[position].name}`);

  spamSound.addEventListener("click", function click () {
    audioPokemons.play();
  })
 
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
