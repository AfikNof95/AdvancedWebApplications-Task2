import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./product.css";

function Product(props) {
  const { product, onAddProduct } = props;

  const addProductHandler = () => onAddProduct(product);

  return (
    <Card className="card-container" style={{ width: "15rem" }}>
      <Card.Img
        variant="top"
        src={`${product.firstPhotoUrl}`}
        alt={`${product.name}`}
        height="200px"
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{product.name}</Card.Title>
        <Card.Text style={{ overflow: "auto", height: "150px" }}>
          {product.description}
        </Card.Text>
        <div id="price-add-wrapper" className="mt-auto">
          <Card.Text>price ${product.price}</Card.Text>
          <Button variant="primary" onClick={addProductHandler}>
            Add to cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Product;
