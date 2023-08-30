import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">Home</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/teams">
              Create a Team
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/PokemonTeamB">
              Pokemon-Team-Page
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/picachu">
              Picachu
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
