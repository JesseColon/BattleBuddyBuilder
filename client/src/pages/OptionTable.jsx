import React from 'react';

const OptionTable = () => {
  const options = [
    'Normal',
    'Fire',
    'Water',
    'Electric',
    'Grass',
    'Ice',
  ];

  // Define custom CSS classes for each row
  const rowClasses = [
    'table-primary',
    'table-danger',
    'table-info',
    'table-warning',
    'table-success',
    'table-secondary',
  ];

  return (
    <div>
      <h1>Battle Buddy Pokémon Team Builder</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Move</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th>Total Strength</th>
            <th>Total Weakness</th>
          </tr>
        </thead>
        <tbody>
          {options.map((option, index) => (
            <tr key={index} className={rowClasses[index % rowClasses.length]}>
              <th scope="row">{option}</th>
              <td>you will add text</td>
              <td></td>
              <td>the Pokémon options</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default OptionTable;
