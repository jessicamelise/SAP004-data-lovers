
export const loadApiPokemonAsync = async () => {
  const pokemonAPI = await fetch("./data/pokemon/pokemon.json")
  const response = await pokemonAPI.json();
  return response.pokemon;
}