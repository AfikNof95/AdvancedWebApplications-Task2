import React, { useEffect } from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Product from "../product/Product";

function Home(props) {
  const { products, onAddProduct, setIsInCartPage } = props;

  useEffect(() => {
    setIsInCartPage(false);
  }, []);

  return (
    <div id="home-layout">
      <Container id="display-container">
        <Row>
          {products.map((product, index) => (
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
