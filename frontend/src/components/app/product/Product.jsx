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
        alt={`${product.title}`}
        height="200px"
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text style={{ overflow: "auto", maxHeight: "96px" }}>
          {product.description}
        </Card.Text>
        <div id="price-add-wrapper">
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
