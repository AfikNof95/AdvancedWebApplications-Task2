import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./usercart.css";
import "bootstrap/dist/css/bootstrap.min.css";

function UserCart(props) {
  const { cart, onClose, onAdd, onRemove } = props;
  const cartPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);
  const israelTax = cartPrice * 0.17;
  const cartSumPrice = cartPrice + israelTax;

  return (
    <aside className="block col-1" id="user-cart">
      <Container>
        <div className="row">
          <h4>Cart Items</h4>
        </div>
        <button id="close-cart" onClick={onClose}>
          X{" "}
        </button>
        <hr />
        <div className="row">
          <div className="row" id="wrapper">
            {cart.map((item) => (
              <div key={item.id} className="row">
                <div className="col-1">{item.title}</div>
                <div className="col-1">
                  <Button
                    variant="outline-primary"
                    size="sm"
                    onClick={() => onAdd(item)}
                  >
                    +
                  </Button>{" "}
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => onRemove(item)}
                  >
                    -
                  </Button>{" "}
                </div>
                <div className="col-1 text-right">
                  {item.qty} X ${item.price.toFixed(2)}
                </div>
              </div>
            ))}
            {cart.length !== 0 && (
              <>
                <hr />
                <div className="row">
                  <span className="col-2">Items Price</span>
                  <span className="col-1 text-right">
                    ${cartPrice.toFixed(2)}
                  </span>
                </div>
                <div className="row">
                  <span className="col-2">Tax Price</span>
                  <span className="col-1 text-right">
                    ${israelTax.toFixed(2)}
                  </span>
                </div>
                <div className="row">
                  <span className="col-2">
                    <strong>Total price</strong>
                  </span>
                  <span className="col-1 text-right">
                    <strong>${cartSumPrice.toFixed(2)}</strong>
                  </span>
                </div>
                <hr />
              </>
            )}
          </div>
          <div className="row">
            <Button variant="outline-info" onClick={() => alert("Check")}>
              Checkout
            </Button>
          </div>
        </div>
      </Container>
    </aside>
  );
}

export default UserCart;
