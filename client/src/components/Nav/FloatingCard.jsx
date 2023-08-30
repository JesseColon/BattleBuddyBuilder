import React, { useState } from 'react';

const FloatingCard = () => {
  const [team, setTeam] = useState('');
  const [savedTeams, setSavedTeams] = useState([]);
  const [loadedTeam, setLoadedTeam] = useState('');

  // Function to handle saving a team
  const handleSaveTeam = () => {
    if (team !== '') {
      setSavedTeams([...savedTeams, team]);
      setTeam('');
    }
  };

  // Function to handle loading a team by team code
  const handleLoadTeam = () => {
    // Implement logic to load a team based on the team code
    // For this example, we'll set a hardcoded team as an example
    const loadedTeamData = 'Loaded Team Data'; // Replace with actual loaded team data
    setLoadedTeam(loadedTeamData);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card text-center">
            <div className="card-header">
              Team Management
            </div>
            <div className="card-body">
              <h5 className="card-title">Enter Your Team</h5>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter your team"
                value={team}
                onChange={(e) => setTeam(e.target.value)}
              />
              <button
                className="btn btn-primary mb-3"
                onClick={handleSaveTeam}
              >
                Save Team
              </button>
              <hr />
              <h5 className="card-title">Load Team</h5>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Enter Team Code"
                // Implement an onChange handler to update the loaded team code state
              />
              <button
                className="btn btn-success mb-3"
                onClick={handleLoadTeam}
              >
                Load Team
              </button>
              {loadedTeam && (
                <div>
                  <h5 className="card-title">Loaded Team</h5>
                  <p>{loadedTeam}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCard;
