// This is the New Picachu page to add information 


const Picachu = () =>{
    return (
        <div className="container">
          <div class="row">
            
            <div class="col-md-6">
              
                <div class="card mb-4">
                    <img src="/images/pikachu.jpg" class="card-img-top" alt="Pokemon 1" />
                    <div class="card-body">
                        <h2 class="card-title">Pikachu</h2>
                        <p class="card-text">Electric-type Pokemon</p>
                        <p class="card-info">More information to come</p>
                    </div>
                </div>
            
                
                <div class="card mb-4">
                    <img src="/images/blastoise.jpg" class="card-img-top" alt="Pokemon 2"/>
                    <div class="card-body">
                        <h2 class="card-title">Charizard</h2>
                        <p class="card-text">Fire/Flying-type Pokemon</p>
                        <p class="card-info">More information to come</p>
                    </div>
                </div>

            </div>

           
            <div class="col-md-6">
                <div class="container mt-4">
                    
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Home</h5>
                        </div>
                    </div>

                   
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Pokedex</h5>
                        </div>
                    </div>

                   
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Guides</h5>
                        </div>
                    </div>

                  
                    <div class="card mb-3">
                        <div class="card-body">
                            <h5 class="card-title">Pokemon Tools</h5>
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>
        </div>
      );
    };

    export default Picachu;