import { rules, sortByType } from '../src/data.js';

const pokemon = [{
  id: 1,
  name: "Bulbasaur",
  type: ["Grass", "Poison"],
  egg: "2 km",
  "spawn_time": "20:00",
  "spawn_chance": 0.69
},
{
  id: 2,
  name: "Ivysaur",
  type: ["Grass", "Poison"],
  egg: "Not in Eggs",
  "spawn_time": "07:00",
  "spawn_chance": 0.042
},
{
  id: 3,
  name: "Venusaur",
  type: ["Grass", "Poison"],
  egg: "Not in Eggs",
  "spawn_time": "11:30",
  "spawn_chance": 0.017
},
{
  id: 4,
  name: "Charmander",
  type: ["Fire"],
  egg: "2 km",
  "spawn_time": "08:45",
  "spawn_chance": 0.253
}]


describe('rules', () => {

  it('should be an object', () => {
    expect(typeof rules).toBe('object');
  });

  describe('filterType', () => {
    it('is a function', () => {
      expect(typeof rules.filterType).toBe('function');
    })
    it('It returns the right type', () => {
      expect(rules.filterType(pokemon, "Fire")).toEqual(
        [{
          id: 4,
          name: "Charmander",
          type: ["Fire"],
          egg: "2 km",
          "spawn_time": "08:45",
          "spawn_chance": 0.253
        }]
      );
    })

  });

  describe('filterEgg', () => {
    it('is a function', () => {
      expect(typeof rules.filterEgg).toBe('function');
    })
    it('It returns the distance of egg', () => {
      expect(rules.filterEgg(pokemon, "2 km")).toEqual(
        [{
          id: 1,
          name: "Bulbasaur",
          type: ["Grass", "Poison"],
          egg: "2 km",
          "spawn_time": "20:00",
          "spawn_chance": 0.69
        },
        {
          id: 4,
          name: "Charmander",
          type: ["Fire"],
          egg: "2 km",
          "spawn_time": "08:45",
          "spawn_chance": 0.253
        }]
      );
    })

  });

  describe('searchPokemons', () => {
    it('is a function', () => {
      expect(typeof rules.searchPokemons).toBe('function');
    })
    it('It returns the right search', () => {
      expect(rules.searchPokemons(pokemon, "Venusaur")).toEqual(
        [{
          id: 3,
          name: "Venusaur",
          type: ["Grass", "Poison"],
          egg: "Not in Eggs",
          "spawn_time": "11:30",
          "spawn_chance": 0.017
        }]
      );
    })
  });

  describe('orderBy', () => {
    it('is a function', () => {
      expect(typeof rules.orderBy).toBe('function');
    })
    it('It returns the order by Numbers', () => {
      expect(rules.orderBy(pokemon, sortByType.spawnTime, true)).toEqual(
        [{
          id: 2,
          name: 'Ivysaur',
          type: [ 'Grass', 'Poison' ],
          egg: 'Not in Eggs',
          spawn_time: '07:00',
          spawn_chance: 0.042
        },
        {
          id: 4,
          name: 'Charmander',
          type: [ 'Fire' ],
          egg: '2 km',
          spawn_time: '08:45',
          spawn_chance: 0.253
        },
        {
          id: 3,
          name: 'Venusaur',
          type: [ 'Grass', 'Poison' ],
          egg: 'Not in Eggs',
          spawn_time: '11:30',
          spawn_chance: 0.017
        },
        {
          id: 1,
          name: 'Bulbasaur',
          type: [ 'Grass', 'Poison' ],
          egg: '2 km',
          spawn_time: '20:00',
          spawn_chance: 0.69
        }
        ]
      );
    })

    it('It returns the order by reverse Numbers', () => {
      expect(rules.orderBy(pokemon, sortByType.numeric, true)).toEqual(
        [
          {
            id: 4,
            name: 'Charmander',
            type: ['Fire'],
            egg: '2 km',
            spawn_time: '08:45',
            spawn_chance: 0.253
          },
          {
            id: 3,
            name: 'Venusaur',
            type: ['Grass', 'Poison'],
            egg: 'Not in Eggs',
            spawn_time: '11:30',
            spawn_chance: 0.017
          },
          {
            id: 2,
            name: 'Ivysaur',
            type: ['Grass', 'Poison'],
            egg: 'Not in Eggs',
            spawn_time: '07:00',
            spawn_chance: 0.042
          },
          {
            id: 1,
            name: 'Bulbasaur',
            type: ['Grass', 'Poison'],
            egg: '2 km',
            spawn_time: '20:00',
            spawn_chance: 0.69
          }
        ]
      );
    })
    it('It returns the order by Alphabetic', () => {
      expect(rules.orderBy(pokemon, sortByType.alphabetic, false)).toEqual(
        [{
          id: 1,
          name: 'Bulbasaur',
          type: [ 'Grass', 'Poison' ],
          egg: '2 km',
          spawn_time: '20:00',
          spawn_chance: 0.69
        },
        {
          id: 4,
          name: 'Charmander',
          type: [ 'Fire' ],
          egg: '2 km',
          spawn_time: '08:45',
          spawn_chance: 0.253
        },
        {
          id: 2,
          name: 'Ivysaur',
          type: [ 'Grass', 'Poison' ],
          egg: 'Not in Eggs',
          spawn_time: '07:00',
          spawn_chance: 0.042
        },
        {
          id: 3,
          name: 'Venusaur',
          type: [ 'Grass', 'Poison' ],
          egg: 'Not in Eggs',
          spawn_time: '11:30',
          spawn_chance: 0.017
        }
        ]
      );
    })
    it('It returns the order by Spawn Chance', () => {
      expect(rules.orderBy(pokemon, sortByType.spawnChance, false)).toEqual(
        [
          {
            id: 1,
            name: 'Bulbasaur',
            type: [ 'Grass', 'Poison' ],
            egg: '2 km',
            spawn_time: '20:00',
            spawn_chance: 0.69
          },
          {
            id: 4,
            name: 'Charmander',
            type: [ 'Fire' ],
            egg: '2 km',
            spawn_time: '08:45',
            spawn_chance: 0.253
          },
          {
            id: 2,
            name: 'Ivysaur',
            type: [ 'Grass', 'Poison' ],
            egg: 'Not in Eggs',
            spawn_time: '07:00',
            spawn_chance: 0.042
          },
          {
            id: 3,
            name: 'Venusaur',
            type: [ 'Grass', 'Poison' ],
            egg: 'Not in Eggs',
            spawn_time: '11:30',
            spawn_chance: 0.017
          }
        ]
      );
    })


  });


})
