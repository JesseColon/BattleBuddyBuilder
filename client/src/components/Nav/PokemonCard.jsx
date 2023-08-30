import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PokemonCard = () => {
  const [pokemonNames, setPokemonNames] = useState([
    '', '', '', '', '', '', // Initialize with 6 empty strings
  ]);

  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    // Fetch Pokémon data when the component mounts or when pokemonNames change
    const fetchData = async () => {
      const promises = pokemonNames.map(async (name) => {
        if (name !== '') {
          const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
          return response.data;
        }
        return null;
      });

      const data = await Promise.all(promises);
      setPokemonData(data);
    };

    fetchData();
  }, [pokemonNames]);

  // Function to handle input changes
  const handleInputChange = (e, index) => {
    const updatedNames = [...pokemonNames];
    updatedNames[index] = e.target.value;
    setPokemonNames(updatedNames);
  };

  return (
    <div className="container">
      <div className="row">
        {pokemonNames.map((name, index) => (
          <div className="col-md-4" key={index}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Pokemon {index + 1}</h5>
                <input
                  type="text"
                  className="form-control mb-2"
                  placeholder="Enter Pokemon Name"
                  value={name}
                  onChange={(e) => handleInputChange(e, index)}
                />
                {pokemonData[index] && (
                  <div>
                    <p>Name: {pokemonData[index].name}</p>
                    <p>Height: {pokemonData[index].height}</p>
                    <p>Weight: {pokemonData[index].weight}</p>
                    {/* Add more data fields as needed */}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
