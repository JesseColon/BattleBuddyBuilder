import ProductList from "../components/ProductList";
import CategoryMenu from "../components/CategoryMenu";
import Cart from "../components/Cart";
import Youtube from '../components/Nav/Youtube';



const Home = () => {
  return (
    <div className="container">
      
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
                Pokémon universe, capture and train these creatures to battle other t
                rainers and achieve various goals, such as becoming Pokémon Champions 
                or completing a Pokédex, an encyclopedia of Pokémon species. Pokémon has g
                rown into a global phenomenon, spanning video games, trading card games, 
                animated TV series, movies, and merchandise, captivating the hearts of 
                fans of all ages and fostering a sense of adventure, camaraderie, and 
                exploration in its vast and enchanting world..</p>
            </div>
        </div>
    </div>

    <Youtube/>

    </div>
  );
};

export default Home;
