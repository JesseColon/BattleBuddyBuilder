import React, { useState } from 'react';
import { Dropdown, ButtonGroup, Button } from 'react-bootstrap'; // Import Dropdown, Button, and ButtonGroup from React Bootstrap

const Teams = () => {
  // Arrays of Pokémon names
  const pokemonNames1 = ["", "Pikachu", "Charizard", "Bulbasaur", "Squirtle", "Jigglypuff"];
  const pokemonNames2 = ["", "Mewtwo", "Gengar", "Dragonite", "Vaporeon", "Snorlax"];
  const pokemonNames3 = ["", "Machamp", "Lapras", "Arcanine", "Mew", "Alakazam"];
  const pokemonNames4 = ["", "Gyarados", "Golem", "Aerodactyl", "Kabutops", "Omastar"];
  const pokemonNames5 = ["", "Eevee", "Pidgeot", "Nidoking", "Moltres", "Zapdos"];

  // States to store the selected Pokémon for each menu
  const [selectedPokemon1, setSelectedPokemon1] = useState('');
  const [selectedPokemon2, setSelectedPokemon2] = useState('');
  const [selectedPokemon3, setSelectedPokemon3] = useState('');
  const [selectedPokemon4, setSelectedPokemon4] = useState('');
  const [selectedPokemon5, setSelectedPokemon5] = useState('');

  // Function to handle dropdown selection for each menu
  const handleDropdownSelect = (name, menuNumber) => {
    switch (menuNumber) {
      case 1:
        setSelectedPokemon1(name);
        break;
      case 2:
        setSelectedPokemon2(name);
        break;
      case 3:
        setSelectedPokemon3(name);
        break;
      case 4:
        setSelectedPokemon4(name);
        break;
      case 5:
        setSelectedPokemon5(name);
        break;
      default:
        break;
    }
  };

  // Function to reset all Pokémon selections
  const handleReset = () => {
    setSelectedPokemon1('');
    setSelectedPokemon2('');
    setSelectedPokemon3('');
    setSelectedPokemon4('');
    setSelectedPokemon5('');
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
            <h1>We can add context here</h1>
          <div className="card mb-4">
            <h1>Or add images - tell me what to add</h1>
            {/* Existing card content */}
          </div>
        </div>

        <div className="col-md-6">
          <div className="container mt-4">
            <div className="mb-3">
              {/* Dropdown 1 */}
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic1">
                  {selectedPokemon1 || 'Select a Pokémon 1'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {pokemonNames1.map((name, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleDropdownSelect(name, 1)}
                    >
                      {name || 'Empty Selection'}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              {selectedPokemon1 && (
                <div className="card">
                  <img src={`/images/${selectedPokemon1.toLowerCase()}.jpg`} className="card-img-top" alt={selectedPokemon1} />
                  <div className="card-body">
                    <h2 className="card-title">{selectedPokemon1}</h2>
                    {/* Add more information about the selected Pokémon if needed */}
                  </div>
                </div>
              )}
            </div>

            {/* Add similar sections for other dropdown menus */}
            
            {/* Dropdown 2 */}
            <div className="mb-3">
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic2">
                  {selectedPokemon2 || 'Select a Pokémon 2'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {pokemonNames2.map((name, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleDropdownSelect(name, 2)}
                    >
                      {name || 'Empty Selection'}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              {selectedPokemon2 && (
                <div className="card">
                  <img src={`/images/${selectedPokemon2.toLowerCase()}.jpg`} className="card-img-top" alt={selectedPokemon2} />
                  <div className="card-body">
                    <h2 className="card-title">{selectedPokemon2}</h2>
                    {/* Add more information about the selected Pokémon if needed */}
                  </div>
                </div>
              )}
            </div>
            
            {/* Add similar sections for other dropdown menus */}
            
            {/* Dropdown 3 */}
            <div className="mb-3">
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic3">
                  {selectedPokemon3 || 'Select a Pokémon 3'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {pokemonNames3.map((name, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleDropdownSelect(name, 3)}
                    >
                      {name || 'Empty Selection'}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              {selectedPokemon3 && (
                <div className="card">
                  <img src={`/images/${selectedPokemon3.toLowerCase()}.jpg`} className="card-img-top" alt={selectedPokemon3} />
                  <div className="card-body">
                    <h2 className="card-title">{selectedPokemon3}</h2>
                    {/* Add more information about the selected Pokémon if needed */}
                  </div>
                </div>
              )}
            </div>
            
            {/* Add similar sections for other dropdown menus */}
            
            {/* Dropdown 4 */}
            <div className="mb-3">
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic4">
                  {selectedPokemon4 || 'Select a Pokémon 4'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {pokemonNames4.map((name, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleDropdownSelect(name, 4)}
                    >
                      {name || 'Empty Selection'}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              {selectedPokemon4 && (
                <div className="card">
                  <img src={`/images/${selectedPokemon4.toLowerCase()}.jpg`} className="card-img-top" alt={selectedPokemon4} />
                  <div className="card-body">
                    <h2 className="card-title">{selectedPokemon4}</h2>
                    {/* Add more information about the selected Pokémon if needed */}
                  </div>
                </div>
              )}
            </div>
            
            {/* Add similar sections for other dropdown menus */}
            
            {/* Dropdown 5 */}
            <div className="mb-3">
              <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle variant="primary" id="dropdown-basic5">
                  {selectedPokemon5 || 'Select a Pokémon 5'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {pokemonNames5.map((name, index) => (
                    <Dropdown.Item
                      key={index}
                      onClick={() => handleDropdownSelect(name, 5)}
                    >
                      {name || 'Empty Selection'}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              {selectedPokemon5 && (
                <div className="card">
                  <img src={`/images/${selectedPokemon5.toLowerCase()}.jpg`} className="card-img-top" alt={selectedPokemon5} />
                  <div className="card-body">
                    <h2 className="card-title">{selectedPokemon5}</h2>
                    {/* Add more information about the selected Pokémon if needed */}
                  </div>
                </div>
              )}
            </div>
            
            {/* Reset button */}
            <div className="text-center">
              <Button variant="danger" onClick={handleReset}>
                Reset
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
