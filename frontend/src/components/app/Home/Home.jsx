import React, { useEffect } from "react";
import Product from "../product/Product";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Home(props) {
  const { products, onAddProduct, setIsInCartPage } = props;

  useEffect(() => {
    setIsInCartPage(false);
  }, []);

  return (
    <div id="home-layout" className="mt-3">
      <Container id="display-container">
        <Row>
          {products.map((product) => (
            <Product
              product={product}
              key={product._id}
              onAddProduct={onAddProduct}
            />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
