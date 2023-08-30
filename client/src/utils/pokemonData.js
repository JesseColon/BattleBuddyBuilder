const axios = require('axios');

const getPokemonById = async (pokemonId) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching Pokemon data:', error);
    return null;
  }
};

module.exports = getPokemonById;
