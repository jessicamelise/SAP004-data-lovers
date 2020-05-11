import {computeStatsType} from "./data.js"
import data from "./data/pokemon/pokemon.js"

const pokemons = [
    {
        "id": 1,
        "name": "Bulbasaur",
        "type": ["Grass", "Poison"],
        "egg": "2 km",
        "spawn_time": "20:00",
        "spawn_chance": 0.69
    },
    {
        id: 2,
        "name": "Ivysaur",
        "type": ["Grass", "Poison"],
        "egg": "Not in Eggs",
        "spawn_time": "07:00",
        "spawn_chance": 0.042
    },
    {
        id: 3,
        "name": "Venusaur",
        "type": ["Grass", "Poison"],
        "egg": "Not in Eggs",
        "spawn_time": "11:30",
        "spawn_chance": 0.017
    },
    {
        "id": 4,
        "name": "Charmander",
        "type": ["Fire"],
        "egg": "2 km",
        "spawn_time": "08:45",
        "spawn_chance": 0.253
    },
    {
        "id": 132,
        "name": "Ditto",
        "type": ["Normal"],
        "egg": "Not in Eggs",
        "spawn_time": "N/A",
        "spawn_chance": 0
    }
]



let takeValuesType = computeStatsType(data.pokemon);
let takeObjectKeysType = Object.keys(takeValuesType);
let takeObjectValuesType = Object.values(takeValuesType);

let ctx = document.getElementById('graphic-type').getContext('2d');
let chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
        labels: takeObjectKeysType,
        datasets: [{
            label: 'Quantidade:',
            backgroundColor: ['rgb(255, 99, 132)',
            "tomato",
            "red",
            "pink",
            "orange",
            "black",
            "green"],
            borderColor: 'rgb(255, 99, 132)',
            data: takeObjectValuesType
        }]
    },

    // Configuration options go here
    options: {
        animation: {},
        tooltips: {
            enabled: true,
            mode: "nearest"
        }
    }
});

