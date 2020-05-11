
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


function computeStatsType(data) {
    let takeType = data.map(function (item) {
        return item.type;
    })

    let putTogetherAllArrays = takeType.flat();

    let countTypes = putTogetherAllArrays.reduce(function (allTypes, atualType) {
        if (atualType in allTypes) {
            allTypes[atualType]++;
        } else {
            allTypes[atualType] = 1;
        }
        return allTypes;
    }, {})

    return countTypes;
}



let takeValuesType = computeStatsType(pokemons);
let takeObjectKeysType = Object.keys(takeValuesType);
let takeObjectValuesType = Object.values(takeValuesType);

var ctx = document.getElementById('graphic-type').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: takeObjectKeysType,
        datasets: [{
            label: 'My First dataset',
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

