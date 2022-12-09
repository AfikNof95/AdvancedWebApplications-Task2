import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./CartPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CartPage(props) {
  const {
    cart,
    onAddProduct,
    onRemoveProduct,
    isInCartPage,
    setIsInCartPage,
    setUserShoppingCart,
  } = props;
  const cartPrice = cart.reduce((a, c) => a + c.qty * c.price, 0);
  const israelTax = cartPrice * 0.17;
  const cartSumPrice = cartPrice + israelTax;

  const deleteCart = () => {
    setUserShoppingCart([]);
  };

  useEffect(() => {
    setIsInCartPage(true);
  }, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("Clicked submit");
    /* Next will send an object of the details
    first-name-input
    last-name-input
    email-input
    phone-input
    city-input
    zip-input
    street-input
    house-number-input
    country-input
    */
  };

  return (
    <div id="cart-page-layout" className="container mt-1">
      <div>
        <h4>Hey User!</h4>
        {cart.length > 0 && <h5>This is your cart</h5>}
      </div>
      {cart.length > 0 && (
        <div id="cart-sum-continer" className="container">
          {cart.map((item, index) => (
            <div className="row card-container" key={index}>
              <div className="card mb-3 cart-card">
                <div className="row align-items-center g-0">
                  <div className="col-3 img-container">
                    <img
                      src={`${item.firstPhotoUrl}`}
                      className="img-fluid rounded-start"
                      alt={`${item.title}`}
                    />
                  </div>
                  <div className="col-6 d-flex flex-column">
                    <div className="card-body">
                      <span>
                        <h5 className="card-title d-flex justify-content-start">
                          {item.title}
                        </h5>
                      </span>
                      <div className="row">
                        <button
                          type="button"
                          className="col btn btn-success me-2"
                          onClick={() => onAddProduct(item, isInCartPage)}
                        >
                          +
                        </button>
                        <div className="col qty-wrapper me-2">{item.qty}</div>
                        <button
                          type="button"
                          className="col btn btn-danger"
                          onClick={() => onRemoveProduct(item)}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-3">
                    <div>
                      {item.qty} X ${item.price.toFixed(2)} each
                    </div>
                    <div>
                      <strong>${item.qty * item.price} total</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <h5>
            <u>Payment sumerize</u>
          </h5>
          <hr />
          <div className="row">
            <span className="col">Items Price</span>
            <span className="col">${cartPrice.toFixed(2)}</span>
          </div>
          <div className="row">
            <span className="col">Tax Price</span>
            <span className="col">${israelTax.toFixed(2)}</span>
          </div>
          <div className="row">
            <span className="col">
              <strong>Total price</strong>
            </span>
            <span className="col">
              <strong>${cartSumPrice.toFixed(2)}</strong>
            </span>
          </div>
          <Link to={"/"}>
            <button
              id="delte-all-cart-btn"
              type="button"
              className="btn btn-outline-danger"
              onClick={deleteCart}
            >
              Delete All Cart
            </button>
          </Link>
        </div>
      )}
      <div id="person-continer" className="container">
        <h5 className="mb-3 mt-2">Personal Details To Complete Checkout</h5>
        <hr />
        <form onSubmit={onSubmitHandler}>
          <div className="row mb-3">
            <label htmlFor="first-name-input" className="col form-label">
              First Name
            </label>
            <input
              type="text"
              className="col form-control"
              id="first-name-input"
            />
            <label htmlFor="last-name-input" className="col form-label">
              Last Name
            </label>
            <input
              type="text"
              className="col form-control"
              id="last-name-input"
            />
          </div>
          <div className="row mb-3">
            <label htmlFor="email-input" className="col form-label">
              Email address
            </label>
            <input type="email" className="col form-control" id="email-input" />
            <label htmlFor="phone-input" className="col form-label">
              Phone number
            </label>
            <input
              type="number"
              className="col form-control"
              id="phone-input"
            />
          </div>
          <div className="row mb-3">
            <label htmlFor="city-input" className="col form-label">
              City / Town
            </label>
            <input type="text" className="col form-control" id="city-input" />
            <label htmlFor="zip-input" className="col form-label">
              Zip Code
            </label>
            <input type="number" className="col form-control" id="zip-input" />
          </div>
          <div className="row mb-3">
            <label htmlFor="street-input" className="col form-label">
              Street
            </label>
            <input type="text" className="col form-control" id="street-input" />
            <label htmlFor="house-number-input" className="col form-label">
              House Number
            </label>
            <input
              type="number"
              className="col form-control"
              id="house-number-input"
            />
          </div>
          <div className="row mb-3">
            <label htmlFor="country-input" className="col form-label">
              Country
            </label>
            <input
              type="text"
              className="col form-control"
              id="country-input"
            />
            <div className="col"></div>
            <button type="submit" className="col btn btn-primary" on>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CartPage;
