import { useState } from 'react';

const API_URL = 'https://beta.pokeapi.co/graphql/v1beta';


function TeamBuilder() {
    const [pokemonList, setPokemonList] = useState([]);
    const [teamList, setTeamList] = useState([]);
    const maxTeamSize = 6;

    async function fetchPokemonInfo() {
        const query =
            `{
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
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query }),
            });


            const data = await response.json();
            setPokemonList(data.data.pokemon_v2_pokemon);
        } catch (error) {
            console.error('Error fetching missingno', error);
        }
    }

    function addToTeam(pokemon) {
        if (teamList.length < maxTeamSize) {
            setTeamList([...teamList, pokemon]);
        } else {
            alert('Your team is already full!')
        }
    }

    return (
        <div>
            <div id="pokemonList">
                {pokemonList.map(pokemon => (
                    <div key={pokemon.name}>
                        <p>
                            Name: {pokemon.name}<br />
                            Type: {pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name}<br />
                            Ability: {pokemon.pokemon_v2_pokemonabilities[0].pokemon_v2_ability.name}<br />
                            Item: {pokemon.pokemon_v2_pokemonhelditems[0].pokemon_v2_item.name}
                        </p>
                        <button onClick={() => addToTeam(pokemon)}>Add to Team</button>
                    </div>
                ))}
            </div>
            <div id="selectedTeam">
                <h2>Selected Team:</h2>
                <ul>
                    {teamList.map(pokemon => (
                        <li key={pokemon.name}>{pokemon.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );

}

export default TeamBuilder;