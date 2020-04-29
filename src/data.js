import data from './data/pokemon/pokemon.js';

const rules = {
  filterType: (list, filterValue) => {
    let newList = [];
    newList = list.filter((item) => !filterValue || item.type.includes(filterValue));
    return newList;
  },
  
  filterEgg: (list, filterValue) => {
    let newList = [];
    newList = list.filter((item) => !filterValue || item.egg.includes(filterValue));
    return newList;
  },
  
  searchPokemons: (list, letters) => {
    let newList = [];
    newList = list.filter((item) => !letters || item.name.toLowerCase().includes(letters.toLowerCase()));
    return newList;
  },
  
  orderBy: (list, sortBy, isDesc) => {
    let newList = [];
    if (sortBy === sortByType.numeric) {
        newList = list.sort((a, b) => a.id - b.id);
    } else if (sortBy === sortByType.alphabetic) {
        newList = list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === sortByType.spawnChance) {
        newList = list.sort((a, b) => b.spawn_chance - a.spawn_chance);
    } else if (sortBy === sortByType.spawnTime) {
        newList = list.sort(function (a, b) {
            if (a.spawn_time === "N/A") {
                a.spawn_time = "00:00"
            }
            return b.spawn_time.localeCompare(a.spawn_time);
        })
    }
    if (isDesc) {
        newList.reverse();
    }
    return newList;
  },
  
  getFilterPokemon: (condition) => {
    let pokemons = filterType(data.pokemon, condition.type);
    pokemons = filterEgg(pokemons, condition.egg);
    pokemons = searchPokemons(pokemons, condition.search);
    pokemons = orderBy(pokemons, condition.sortBy, condition.isDesc);
    return pokemons;
  }
}

const sortByType = {
  numeric: 0,
  alphabetic: 1,
  spawnChance: 2,
  spawnTime: 3,
}

export default rules;