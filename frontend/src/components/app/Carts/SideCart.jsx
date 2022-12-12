import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "./SideCart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function SideCart(props) {
  const { cart, onClose, onAddProduct, onRemoveProduct } = props;
  const [checkoutBtnDisabled, setCheckoutBtnDisabled] = useState(true);
  const cartPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);
  const israelTax = cartPrice * 0.17;
  const cartSumPrice = cartPrice + israelTax;

  useEffect(() => {
    cart.length === 0
      ? setCheckoutBtnDisabled(true)
      : setCheckoutBtnDisabled(false);
  }, [cart]);

  return (
    <aside className="block col-1" id="user-cart">
      <Container>
        <div className="row">
          <h4>Cart Items</h4>
        </div>
        <button id="close-cart" onClick={onClose}>
          X{" "}
        </button>
        <hr style={{ width: "244px" }} />
        <div className="col" id="products-body">
          <div className="row prod-wrapper">
            {cart.map((item) => (
              <div key={item._id} className="row side-cart-row">
                <div className="col-4 items-title-in-row">{item.name}</div>
                <div className="col-8 btns-price-section">
                  <button
                    type="button"
                    className="btn btn-success add-remove-btns"
                    style={{ padding: 0 }}
                    onClick={() => onAddProduct(item)}
                  >
                    +
                  </button>
                  <span>{item.qty}</span>
                  <button
                    type="button"
                    className="btn btn-danger add-remove-btns"
                    style={{ padding: 0 }}
                    onClick={() => onRemoveProduct(item)}
                  >
                    -
                  </button>
                  <span className="text-right">
                    ${(item.qty * item.price).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
            {cart.length !== 0 && (
              <>
                <hr id="hr-prod-between-sum" />
                <div className="row side-cart-row">
                  <span className="col text-left">Items Price</span>
                  <span className="col text-right">
                    ${cartPrice.toFixed(2)}
                  </span>
                </div>
                <div className="row side-cart-row">
                  <span className="col text-left">Tax Price</span>
                  <span className="col text-right">
                    ${israelTax.toFixed(2)}
                  </span>
                </div>
                <div className="row side-cart-row">
                  <span className="col text-left">
                    <strong>Total price</strong>
                  </span>
                  <span className="col text-right">
                    <strong>${cartSumPrice.toFixed(2)}</strong>
                  </span>
                </div>
                <hr />
              </>
            )}
          </div>
        </div>
        <div className="bottom-section">
          {checkoutBtnDisabled ? (
            <button type="button" className="btn btn-info" disabled>
              Checkout
            </button>
          ) : (
            <Link to={"/Cart"}>
              <button type="button" className="btn btn-info">
                Checkout
              </button>
            </Link>
          )}
        </div>
      </Container>
    </aside>
  );
}

export default SideCart;
