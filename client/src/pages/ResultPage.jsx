// ResultPage.js
import React from 'react';

function ResultPage() {
  const options = [
    { id: 1, name: 'Option 1', value: 'Value 1' },
    { id: 2, name: 'Option 2', value: 'Value 2' },
    // Add more options as needed
  ];

  return (
    <div>
      <h1>Result Page</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {options.map((option) => (
            <tr key={option.id}>
              <td>{option.id}</td>
              <td>{option.name}</td>
              <td>{option.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ResultPage;