import { rules } from "./data.js"
import data from "./data/pokemon/pokemon.js"

let takeValuesType = rules.computeStatsType(data.pokemon);
let takeObjectKeysType = Object.keys(takeValuesType);
let takeObjectValuesType = Object.values(takeValuesType);

let takeValuesEgg = rules.computeStatsEgg(data.pokemon);
let takeObjectKeysEgg = Object.keys(takeValuesEgg);
let takeObjectValuesEgg = Object.values(takeValuesEgg);

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

let ctxDois = document.getElementById("graphic-egg").getContext('2d');
let chartDois = new Chart(ctxDois, {
  type: 'bar',
  data: {
    labels: takeObjectKeysEgg,
    datasets: [{
      label: 'Quantidade:',
      backgroundColor: ['rgb(255, 99, 132)',
        "tomato",
        "red",
        "pink",
        "orange"],
      borderColor: 'rgb(255, 99, 132)',
      data: takeObjectValuesEgg
    }]
  },
  options: {
    animation: {},
    tooltips: {
      enabled: true,
      mode: "nearest"
    }
  }
});

