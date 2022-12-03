import React, { useState } from "react";
import { products } from "../../../tmpProducts";
import "./mainbody.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function Mainbody(props) {
  const { onOpen } = props;

  const productList = products.map((product, index) => (
    <Card className="card-container" style={{ width: "15rem" }} key={index}>
      <Card.Img
        variant="top"
        src={`${product.firstPhotoUrl}`}
        alt={`${product.title}`}
        height="200px"
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>price {product.price}</Card.Text>
        <Button variant="primary" onClick={onOpen}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  ));

  return (
    <div>
      <Container id="display-container">
        <Row> {productList} </Row>
      </Container>
    </div>
  );
}

export default Mainbody;
