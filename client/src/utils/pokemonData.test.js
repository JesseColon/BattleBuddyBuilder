const getPokemonById = require('../utils/pokemonData');

describe('getPokemonById', () => {
  it('fetches Pokemon data successfully', async () => {
    const pokemonData = await getPokemonById(1);
    // Your assertions here
  });

  it('handles errors when fetching Pokemon data', async () => {
    const pokemonData = await getPokemonById(2);
    // Your assertions here
  });
});
