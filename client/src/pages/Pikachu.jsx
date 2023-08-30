// This is the New Picachu page to add information 


const Picachu = () =>{
    return (
        <div className="container">
          <div className="row">
            
            <div className="col-md-6">
              
                <div className="card mb-4">
                    <img src="/images/pikachu.jpg" className="card-img-top" alt="Pokemon 1" />
                    <div className="card-body">
                        <h2 className="card-title">Pikachu</h2>
                        <p className="card-text">Electric-type Pokemon</p>
                        <p className="card-info">More information to come</p>
                    </div>
                </div>
            
                
                <div className="card mb-4">
                    <img src="/images/blastoise.jpg" className="card-img-top" alt="Pokemon 2"/>
                    <div className="card-body">
                        <h2 className="card-title">Charizard</h2>
                        <p className="card-text">Fire/Flying-type Pokemon</p>
                        <p className="card-info">More information to come</p>
                    </div>
                </div>

            </div>

           
            <div className="col-md-6">
                <div className="container mt-4">
                    
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Home</h5>
                        </div>
                    </div>

                   
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Pokedex</h5>
                        </div>
                    </div>

                   
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Guides</h5>
                        </div>
                    </div>

                  
                    <div className="card mb-3">
                        <div className="card-body">
                            <h5 className="card-title">Pokemon Tools</h5>
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>
        </div>
      );
    };

    export default Picachu;