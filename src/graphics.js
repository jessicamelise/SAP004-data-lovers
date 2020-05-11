// import { rules } from "./data.js"
// import {loadApiPokemonAsync} from "./pokemonapi.js"
// import {elements} from "./elements.js"



// async function takeValuesType() {
//   let result = await loadApiPokemonAsync();
//   let dataType = rules.computeStatsType(result);
//   let takeObjectKeysType = Object.keys(dataType);
//   let takeObjectValuesType = Object.values(dataType);
  
// createGraphics(elements.graphicType, takeObjectKeysType, ["green"], takeObjectValuesType)

// let takeValuesEgg = rules.computeStatsEgg(result);
// let takeObjectKeysEgg = Object.keys(takeValuesEgg);
// let takeObjectValuesEgg = Object.values(takeValuesEgg);
// createGraphics(elements.graphicEggs, takeObjectKeysEgg, ["green"], takeObjectValuesEgg)

// }

// takeValuesType()


// function createGraphics (elements,labels, colors, dataset) { 
//   let chart = new Chart(elements, {
//     type: 'bar',
  
//     data: {
//       labels: labels,
//       datasets: [{
//         label: 'Quantidade:',
//         backgroundColor: colors,
//         borderColor: 'rgb(255, 99, 132)',
//         data: dataset
//       }]
//     },
  
//     options: {
//       legend: {
//         display: false
//       },
//       tooltips: {
//         enabled: true,
//         mode: "nearest"
//       }
//     }
//   });

//   return chart
// }

