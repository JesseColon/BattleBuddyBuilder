
import React from 'react';
// const options = [
//     {
//         abilities: [
//           {
//             ability: {
//               name: "limber",
//               url: "https://pokeapi.co/api/v2/ability/7/"
//             },
//             is_hidden: false,
//             slot: 1
//           },
//           {
//             ability: {
//               name: "imposter",
//               url: "https://pokeapi.co/api/v2/ability/150/"
//             },
//             is_hidden: true,
//             slot: 3
//           }

//         ],

//         base_experience: 101,
//         forms: [
//           {
//             name: "ditto",
//             url: "https://pokeapi.co/api/v2/pokemon-form/132/"
//           }

//         ],
//     },
const OptionTable = () => {
  // Define the content and functionality of your OptionTable here
  const options = [
    
        
    'Normal',
    'Fire',
    'Water',
    'Electric',
    'Grass',
    'Ice',
  ];

  return (
    <div>
    
      <h1>Battle Buddy Pokémon Team Builder</h1>
      
          <tr>
            <th>Pokemon Table to Set Api</th>
          </tr>
        
     
      <table class="table table-bordered border-primary" >
  <thead>
    <tr>
      <th scope="col">Move</th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col"></th>
      <th scope="col-2">Total Strength</th>
      <th scope="col-2">Total Weaknes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Normal</th>
      <td>you will add text</td>
      <td></td>
      <td>the pkemon options</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Fire</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Water</th>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>

    </tr>
  </tbody>
</table>


    </div>
  );
}

export default OptionTable;
