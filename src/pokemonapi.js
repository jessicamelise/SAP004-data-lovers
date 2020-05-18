
export const loadApiPokemonAsync = async () => {
  try {const pokemonAPI = await fetch("./data/pokemon/pokemon.json")
  const response = await pokemonAPI.json();
  return response.pokemon;
}
catch(err){
  console.error("We got a problem to fetch the information", err)
}
  
}