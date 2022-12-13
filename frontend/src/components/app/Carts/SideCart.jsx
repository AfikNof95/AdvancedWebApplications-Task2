import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "./SideCart.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { X, Plus, Dash } from "react-bootstrap-icons";

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
          <X size={25}></X>
        </button>
        <hr style={{ width: "244px" }} />
        <div className="col" id="products-body">
          <div className="row prod-wrapper">
            {cart.map((item) => (
              <div key={item._id} className="row side-cart-row">
                <div className="col-3 items-title-in-row me-3">{item.name}</div>
                <div className="col-7 btns-price-section">
                  <button
                    type="button"
                    className="btn btn-success col "
                    style={{ padding: 0 }}
                    onClick={() => onAddProduct(item)}
                  >
                    <Plus color="white" size={15}></Plus>
                  </button>
                  <span className="col">{item.qty}</span>
                  <button
                    type="button"
                    className="btn btn-danger col"
                    style={{ padding: 0 }}
                    onClick={() => onRemoveProduct(item)}
                  >
                    <Dash color="white" size={15}></Dash>
                  </button>
                </div>
                <span className="col-1">
                  ${(item.qty * item.price).toFixed(2)}
                </span>
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
            <button
              type="button"
              className="btn btn-primary btn-checkout"
              disabled
            >
              Checkout
            </button>
          ) : (
            <Link to={"/Cart"}>
              <button
                type="button"
                className="btn btn-primary btn-checkout"
                onClick={onClose}
              >
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
