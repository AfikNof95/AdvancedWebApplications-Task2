import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Product(props) {
  const { product, onAdd } = props;

  return (
    <Card className="card-container" style={{ width: "15rem" }}>
      <Card.Img
        variant="top"
        src={`${product.firstPhotoUrl}`}
        alt={`${product.title}`}
        height="200px"
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Card.Text>price ${product.price}</Card.Text>
        <Button variant="primary" onClick={() => onAdd(product)}>
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
