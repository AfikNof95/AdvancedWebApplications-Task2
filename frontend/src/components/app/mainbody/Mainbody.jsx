import React, { useState } from "react";
import "./mainbody.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Product from "../product/Product";

function Mainbody(props) {
  const { products, onAdd } = props;

  return (
    <div>
      <Container id="display-container">
        <Row>
          {products.map((product, index) => (
            <Product product={product} key={index} onAdd={onAdd} />
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Mainbody;
