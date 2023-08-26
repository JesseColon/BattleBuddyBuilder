{/* This is the navigation page */}

import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

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
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <Link class="navbar-brand" to="/">Home</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/teams">
                Create a Team
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/PokemonTeamB">
                Pokemon-Team-Page
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/picachu">
                Picachu
              </Link>
            </li>
            <li class="nav-item">
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

        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Home</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item active">
                <Link  className ='text-light mr-2' to="/login">
               Login
               </Link> 
                </li>
             
                <li class="nav-item">
                <Link className ='text-light' to="/signup">
                Signup
               </Link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">View all Team Builds</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Guides</a>
                </li>
             
             
               
            </ul>
        </div>
    </nav>
      );
    }
  }

  return (
    <header >
      {/* <h1>
        <Link to="/">
          <span role="img" aria-label="shopping bag">🛍️</span>
          -Shop-Shop
        </Link>
      </h1> */}

      <nav>
        {showNavigation()}
      </nav>
{/* Here is wehre I have the main image */}
      <header class="jumbotron text-center">
        <h1>Welcome to Battle Buddy Builder</h1>

    </header>

    </header>
    
  );
}

export default Nav;
