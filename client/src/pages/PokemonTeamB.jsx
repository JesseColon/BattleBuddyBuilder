 {/* Pokemon team page */}

import React from 'react';

const PokemonTeamB = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#">Home</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Teams</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pokémon Team Builder</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Guides</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">TCG</a>
            </li>
          </ul>
        </div>
      </nav>

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
