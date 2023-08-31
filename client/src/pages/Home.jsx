//import React from "react";
import { Card, CardGroup } from "react-bootstrap"; // Import Card and CardGroup
import Youtube from '../components/Nav/Youtube';
// import Login2 from './login2';



const Home = () => {
  return (
    <div className="container">

<header class="jumbotron text-center">
        <h1>Welcome to Battle Buddy Builder</h1>

        
    </header>
{/* <Login2 /> */}
      
      {/* REmind me to delete these they are here to change later */}
      {/* <CategoryMenu /> */}
      {/* <ProductList /> */}
      {/* <Cart /> */}

      <div class="container text-center">
  <div class="row">
    <div class="col order-last">
      First in DOM, ordered last
      <p> We will add some information hwere</p>
    </div>
    <div class="col">
      Second in DOM, unordered
      <p> We will add some information hwere</p>
    </div>
    <div class="col order-first">
      <h1>Who we are!</h1>
    <p>
          A dedicated group of fans of Pokémon that have come together to create online platforms 
          and pages where they can assemble and discuss Pokémon teams. These teams 
          are meticulously crafted to showcase the strengths and weaknesses of various 
          Pokémon species, often with a strategic focus on battling other trainers. 
          Through these pages, Pokémon enthusiasts share their knowledge, exchange 
          tips, and engage in friendly competition to demonstrate their mastery of 
          type matchups, movesets, and team synergy. It's a vibrant community where 
          players can collaborate and refine their skills while celebrating their shared 
          passion for the world of Pokémon.</p>
    </div>
  </div>
</div>

  

      <div class="container mt-5">
        <div class="card rounded-lg">
            <div class="card-body">
                <h5 class="card-title">What are Pokémon</h5>
                <p class="card-text">Pokémon, short for "Pocket Monsters," are fictional 
                creatures that inhabit a rich and imaginative world in the popular 
                franchise created by Satoshi Tajiri and Ken Sugimori. These creatures 
                come in a wide variety of species, each with its own unique abilities, 
                characteristics, and types. Trainers, who are individuals within the 
                Pokémon universe, capture and train these creatures to battle other 
                trainers and achieve various goals, such as becoming Pokémon Champions 
                or completing a Pokédex, an encyclopedia of Pokémon species. Pokémon has 
                grown into a global phenomenon, spanning video games, trading card games, 
                animated TV series, movies, and merchandise, captivating the hearts of 
                fans of all ages and fostering a sense of adventure, camaraderie, and 
                exploration in its vast and enchanting world..</p>
            </div>
        </div>
    </div>
<br></br>
    <Youtube/>
    <br></br>
    <br></br>

    </div>
  );
};

export default Home;

// https://www.youtube.com/embed/Zyt2GKb6qWw

// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// function Nav() {
//   const location = useLocation();

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <Link className="navbar-brand" to="/">Home</Link>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav">
//           <li className="nav-item">
//             <Link className="nav-link" to="/teams">
//               Create a Team
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/PokemonTeamB">
//               Pokemon-Team-Page
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link" to="/picachu">
//               Picachu
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Nav;
