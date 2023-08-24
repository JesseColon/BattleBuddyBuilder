
// here i want to create a component that will display the user profile. displaying the user profile will be done by fetching the user data from the database and displaying it on the screen.
// the user profile will be displayed in the user profile page. the user profile page will be displayed when the user clicks on the user profile button in the navigation bar.
//the user profile page will display the users profile picture, username, there set pokemon team, and a list of alternative pokemon teams that they have created.
import React, {useState, useEffect} from 'react';
import './UserProfile.css';

function UserProfile() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/api/user')
            .then(res => {
                if(!res.ok) {throw Error('could not fetch the user');
            }
            return res.json();
        })
            .then(data => {
                setUser(data);
                setLoading(false);
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message);
                setLoading(false);
            })
    }, []);

    if(loading) return <div>Loading...</div>;
    if(error) return <div>{error}</div>;

    return (
        <div className="user-profile">
            <div className="user-profile-header">
                <h1>{user.username}</h1>
                <img src={user.profilePicture} alt="profile picture" />
            </div>
            <div className="user-profile-body">
                <div className="user-profile-body-pokemon-team">
                    <h2>Team</h2>
                    <div className="user-profile-body-pokemon-team-pokemon">
                    {user.team.map((pokemon, index) => (
                            <div key={index} className={`pokemon-${index + 1}`}>
                                <img src={pokemon.image} alt={pokemon.name} />
                                <p>{pokemon.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="user-profile-body-alternative-teams">
                    <h2>Alternative Teams</h2>
                    <div className="user-profile-body-alternative-teams-alternative-team">
                        {/* Render alternative teams similar to the main team, perhaps with some variation */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile