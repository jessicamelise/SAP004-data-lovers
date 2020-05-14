import { rules, sortByType, getFilterPokemon, throwNewError } from '../src/data.js';
import { dataPokemon, Bulbasaur, Ivysaur, Venusaur, Charmander, Ditto } from '../src/arraypokemon.js'

describe('rules', () => {

  it('should be an object', () => {
    expect(typeof rules).toBe('object');
  });

  describe('filterType', () => {
    it('is a function', () => {
      expect(typeof rules.filterType).toBe('function');
    })
    it('It returns the right type', () => {
      expect(rules.filterType(dataPokemon, "Fire")).toEqual([Charmander]);
    })

  });

  describe('filterEgg', () => {
    it('is a function', () => {
      expect(typeof rules.filterEgg).toBe('function');
    })
    it('It returns the distance of egg', () => {
      expect(rules.filterEgg(dataPokemon, "2 km")).toEqual([Bulbasaur, Charmander]);
    })
  });

  describe('searchPokemons', () => {
    it('is a function', () => {
      expect(typeof rules.searchPokemons).toBe('function');
    })
    it('It returns the right search', () => {
      expect(rules.searchPokemons(dataPokemon, "Venusaur")).toEqual([Venusaur]);
    })
  });

  describe('orderBy', () => {
    it('is a function', () => {
      expect(typeof rules.orderBy).toBe('function');
    })
    it('It returns the order by reverse Spawn Time', () => {
      expect(rules.orderBy(dataPokemon, sortByType.spawnTime, true)).toEqual(
        [Ditto, Ivysaur, Charmander, Venusaur, Bulbasaur]
      );
    })
    it('It returns the order by reverse Numbers', () => {
      expect(rules.orderBy(dataPokemon, sortByType.numeric, true)).toEqual(
        [Ditto, Charmander, Venusaur, Ivysaur, Bulbasaur]
      );
    })
    it('It returns the order by Alphabetic', () => {
      expect(rules.orderBy(dataPokemon, sortByType.alphabetic, false)).toEqual(
        [Bulbasaur, Charmander, Ditto, Ivysaur, Venusaur]
      );
    })
    it('It returns the order by Spawn Chance', () => {
      expect(rules.orderBy(dataPokemon, sortByType.spawnChance, false)).toEqual(
        [Bulbasaur, Charmander, Ivysaur, Venusaur, Ditto]
      );
    })
  });

  describe('computeStatsType', () => {
    it('is a function', () => {
      expect(typeof rules.computeStatsType).toBe('function');
    })
    it('It returns the expected object', () => {
      expect(rules.computeStatsType(dataPokemon)).toEqual({ Grass: 3, Poison: 3, Fire: 1, Normal: 1 });
    })
  });
  
  describe('computeStatsEgg', () => {
    it('is a function', () => {
      expect(typeof rules.computeStatsEgg).toBe('function');
    })
    it('It returns the quantity', () => {
      expect(rules.computeStatsEgg(dataPokemon)).toEqual({ '2 km': 2, 'Not in Eggs': 3 });
    })
  });
})

describe('Get Filter Pokémon', () => {
  it('It returns the Charmander when we call the fire type', () => {
    expect(getFilterPokemon({ type: "Fire" }, dataPokemon)).toEqual([Charmander]);
  })
})

describe('throwNewError', () => {
  it('is a function', () => {
    expect(typeof throwNewError).toBe('function');
  })

  it('It should throw a new error when did not receive the right parameters', () => {
    expect(() => throwNewError()).toThrow(TypeError);
  });
})
