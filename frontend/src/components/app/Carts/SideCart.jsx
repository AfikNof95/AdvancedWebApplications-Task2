import React from "react";
import Container from "react-bootstrap/Container";
import "./SideCart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function SideCart(props) {
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
                <div className="col">{item.title}</div>
                <div className="col">
                  <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => onAdd(item)}
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => onRemove(item)}
                  >
                    -
                  </button>
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
            <Link to="/Cart">
              <button
                type="button"
                className="btn btn-info"
              >
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </Container>
    </aside>
  );
}

export default SideCart;
