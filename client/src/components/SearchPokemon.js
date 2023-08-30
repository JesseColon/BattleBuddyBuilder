const axios = require('axios');

const API_URL = 'https://beta.pokeapi.co/graphql/v1beta';

async function fetchPokemonInfo() {
  const query = `
    {
      pokemon_v2_pokemon {
        name
        pokemon_v2_pokemontypes {
          pokemon_v2_type {
            name
          }
        }
        pokemon_v2_pokemonabilities {
          pokemon_v2_ability {
            name
          }
        }
        pokemon_v2_pokemonhelditems {
          pokemon_v2_item {
            name
          }
        }
      }
    }
  `;

  try {
    const response = await axios.post(API_URL, { query });
    const data = response.data.data.pokemon_v2_pokemon;

    console.log(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchPokemonInfo();
