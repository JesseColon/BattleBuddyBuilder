// Main page where you can make changes

import React from "react";
import { Card, CardGroup } from "react-bootstrap"; // Import Card and CardGroup

const Home = () => {
  return (
    <div className="container">
      {/* Commented out components */}
      {/* <CategoryMenu /> */}
      {/* <ProductList /> */}
      {/* <Cart /> */}
    
      {/* Cards */}

      <div className= "container">
    <h1>Hello we are Battle Buddy Builder</h1>
    <h2>Our site allows you to create your own Pokemon Teams!!
      You will be able to select from varius versions and compare 
      their strengths and weaknesses. 
    </h2>


      </div>

      <div className="container">
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/50"
              alt="Card image cap"
            />
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>
                This is the first card. Add your text and content here.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/50"
              alt="Card image cap"
            />
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>
                This is the second card. Add your text and content here.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
        <Card className="mt-3">
          <Card.Img
            variant="top"
            src="https://via.placeholder.com/150"
            alt="Card image cap"
          />
          <Card.Body>
            <Card.Title>Card 3</Card.Title>
            <Card.Text>
              This is the third card placed at the bottom left. Add your text
              and content here.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Home;
