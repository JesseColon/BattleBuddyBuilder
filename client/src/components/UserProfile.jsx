
import {useState, useEffect} from 'react';
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
                        {}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile