import { rules } from "./data.js"
import { loadApiPokemonAsync } from "./pokemonapi.js"
import { elements } from "./elements.js"

let colorsType = [
  'rgb(96, 185, 84)',
  'rgb(168, 101, 201)',
  'rgb(255, 161, 82)',
  'rgb(144, 169, 222)',
  'rgb(86, 157, 217)',
  'rgb(148, 194, 46)',
  'rgb(145, 154, 161)',
  'rgb(246, 216, 80)',
  'rgb(217, 119, 69)',
  'rgb(216, 66, 94)',
  'rgb(248,110,115)',
  'rgb(200, 184, 139)',
  'rgb(116, 206, 192)',
  'rgb(118, 114, 210)',
  'rgb(9, 105, 193)',
]

let colorsEgg = [
  'rgb(157, 185, 112)',
  'rgb(207, 201, 173)',
  'rgb(218, 169, 62)',
  'rgb(139, 119, 173)',
]

async function takeValuesType() {
  let result = await loadApiPokemonAsync();
  let dataType = rules.computeStatsType(result);
  let takeObjectKeysType = Object.keys(dataType);
  let takeObjectValuesType = Object.values(dataType);
  createGraphics(elements.graphicType.getContext('2d'), takeObjectKeysType, colorsType, takeObjectValuesType)

  let takeValuesEgg = rules.computeStatsEgg(result);
  let takeObjectKeysEgg = Object.keys(takeValuesEgg);
  let takeObjectValuesEgg = Object.values(takeValuesEgg);
  createGraphics(elements.graphicEggs.getContext('2d'), takeObjectKeysEgg, colorsEgg, takeObjectValuesEgg)
}

takeValuesType()


function createGraphics(elements, labels, colors, dataset) {
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

