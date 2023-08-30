 {/* Pokemon team page */}

import React from 'react';

import OptionTable from "./OptionTable";

const PokemonTeamB = () => {
  return (
    <div>
      <OptionTable/>
{/* <GridTable/> */}
 
      <main className="container">
        <div className="row">
          {/* Your Pokemon team builder options go here */}
          <div className="col-md-4">
            <div className="card mb-4">
              {/* Option 1 */}
              <div className="card-body">
                <h2 className="card-title">Option 1</h2>
                <p className="card-text">Description of Option 1.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              {/* Option 2 */}
              <div className="card-body">
                <h2 className="card-title">Option 2</h2>
                <p className="card-text">Description of Option 2.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              {/* Option 3 */}
              <div className="card-body">
                <h2 className="card-title">Option 3</h2>
                <p className="card-text">Description of Option 3.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              {/* Option 4 */}
              <div className="card-body">
                <h2 className="card-title">Option 4</h2>
                <p className="card-text">Description of Option 4.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              {/* Option 5 */}
              <div className="card-body">
                <h2 className="card-title">Option 5</h2>
                <p className="card-text">Description of Option 5.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4">
              {/* Option 6 */}
              <div className="card-body">
                <h2 className="card-title">Option 6</h2>
                <p className="card-text">Description of Option 6.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PokemonTeamB;
