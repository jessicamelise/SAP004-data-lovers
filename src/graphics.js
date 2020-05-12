import { rules } from "./data.js"
import {loadApiPokemonAsync} from "./pokemonapi.js"
// import { Chart } from "./packages/chart.js/Chart.bundle.js"
// import {Chart} from './chart/chart.js/dist/Chart.js'
// import Chart from './chart/chart.js/bundled'
// import {Chart} from "./chart/chart.js/"
// import {elements} from "./elements.js"

// let Chart = require('chart.js')

let graphicType = document.getElementById('graphic-type').getContext('2d');
let graphicEggs = document.getElementById('graphic-egg').getContext('2d');


async function takeValuesType() {
  let result = await loadApiPokemonAsync();
  let dataType = rules.computeStatsType(result);
  let takeObjectKeysType = Object.keys(dataType);
  let takeObjectValuesType = Object.values(dataType);
  
createGraphics(graphicType, takeObjectKeysType, ["green"], takeObjectValuesType)

let takeValuesEgg = rules.computeStatsEgg(result);
let takeObjectKeysEgg = Object.keys(takeValuesEgg);
let takeObjectValuesEgg = Object.values(takeValuesEgg);
createGraphics(graphicEggs, takeObjectKeysEgg, ["green"], takeObjectValuesEgg)

}

takeValuesType()


function createGraphics (elements,labels, colors, dataset) { 
  let chart = new Chart(elements, {
    type: 'bar',
  
    data: {
      labels: labels,
      datasets: [{
        label: 'Quantidade:',
        backgroundColor: colors,
        borderColor: 'rgb(255, 99, 132)',
        data: dataset
      }]
    },
  
    options: {
      legend: {
        display: false
      },
      tooltips: {
        enabled: true,
        mode: "nearest"
      }
    }
  });

  return chart
}

