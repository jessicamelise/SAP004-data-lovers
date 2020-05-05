export const rules = {
  filterType: (list, filterValue) => {
    return list.filter((item) => !filterValue || item.type.includes(filterValue));
  },

  filterEgg: (list, filterValue) => {
    return list.filter((item) => !filterValue || item.egg.includes(filterValue));
  },

  searchPokemons: (list, letters) => {
    return list.filter((item) => !letters || item.name.toLowerCase().includes(letters.toLowerCase()));
  },

  orderBy: (list, sortBy, isDesc) => {
    let newList = [];
    list.map(item => {
      if (item.spawn_time ==="N/A") {
      return item.spawn_time = "00:00"}})
    if (sortBy === sortByType.numeric) {
      newList = list.sort((a, b) => a.id - b.id);
    } else if (sortBy === sortByType.alphabetic) {
      newList = list.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === sortByType.spawnChance) {
      newList = list.sort((a, b) => b.spawn_chance - a.spawn_chance);
    } else {
      newList = list.sort( (a, b) =>  b.spawn_time.localeCompare(a.spawn_time))
    }

    if (isDesc) {
      newList.reverse();
    }
    return newList;
  }
}

export const sortByType = {
  numeric: 0,
  alphabetic: 1,
  spawnChance: 2,
  spawnTime: 3,
}


