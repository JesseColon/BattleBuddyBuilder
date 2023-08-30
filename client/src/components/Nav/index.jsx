{/* This is the navigation page */}

import Auth from "../../utils/auth";
import { Link, useLocation } from "react-router-dom";

function Nav() {
{/*this feature set up the header for the home page*/}
  const location = useLocation();

  function showNavigation() {
    console.log(Auth.loggedIn());
    if (Auth.loggedIn()) {
      return (
        // <ul className="flex-row">
        //   <li className="mx-1">
        //     <Link to="/orderHistory">
        //       Order History
        //     </Link>
        //   </li>
        //   <li className="mx-1">
        //     {/* this is not using the Link component to logout or user and then refresh the application to the start */}
        //     <a href="/" onClick={() => Auth.logout()}>
        //       Logout
        //     </a>
        //   </li>
        // </ul>
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
            <li className="nav-item">
              <Link to="/" onClick={() => Auth.logout()} className="nav-link">
                Logout
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
      
      );
    } else {
      return (  
        // <ul className="flex-row">
        //            <li className="mx-1">
        //     <Link to="/orderHistory">
        //       Order History
        //     </Link>
        //   </li>
        //   <li className="mx-1">
        //     <Link to="/signup">
        //       Signup
        //     </Link>
        //   </li>
        //   <li className="mx-1">
        //     <Link to="/login">
        //       Login
        //     </Link>
        //   </li>
        // </ul>

        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link className="navbar-brand" to="/">Home</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                <Link  className ='text-light mr-2' to="/login">
               Login
               </Link> 
                </li>
             
                <li className="nav-item">
                <Link className ='text-light' to="/signup">
                Signup
               </Link>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">View all Team Builds</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Guides</a>
                </li>
             
             
               
            </ul>
        </div>
    </nav>
      );
    }
  }

 // Check if the user is on the home page (location.pathname === '/')
 const isHomePage = location.pathname === '/';

 return (
   <header>
     <nav>{showNavigation()}</nav>
     {/* Conditionally render the header based on authentication state and route */}
     {Auth.loggedIn() && !isHomePage ? null : (
       <header className="jumbotron text-center">
         <h1>Welcome to Battle Buddy Builder</h1>
       </header>
     )}
   </header>

  
    
  );
}

export default Nav;
