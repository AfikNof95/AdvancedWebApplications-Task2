import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
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
  const isCartEmpty = cart.length === 0;

  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    zip: "",
    street: "",
    houseNumber: "",
    country: "",
  });

  const deleteCart = () => {
    setUserShoppingCart([]);
  };

  const handleFormChange = (event) => {
    setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    setIsInCartPage(true);
  }, []);

  const onSubmitHandler = (event) => {
    event.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3000/Order",
      data: contactInfo,
    });
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
              <div className="card mb-3 cart-card" style={{ paddingLeft: 0 }}>
                <div className="row align-items-center g-0">
                  <div className="col-2 img-container">
                    <img
                      src={`${item.firstPhotoUrl}`}
                      className="img-fluid rounded-start"
                      alt={`${item.title}`}
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-7 d-flex flex-column body-container">
                    <div className="card-body">
                      <span>
                        <h5 className="card-title text-left">{item.title}</h5>
                      </span>
                      <div className="text-left description-wrapper">
                        {item.description}
                      </div>
                      <span className="row buttons-section">
                        <div className="col">
                          <div className="row">
                            <button
                              type="button"
                              className="col btn btn-success add-remove-btns"
                              onClick={() => onAddProduct(item, isInCartPage)}
                            >
                              +
                            </button>
                            <div className="col qty-wrapper ps-2 me-2 ms-2">
                              {item.qty}
                            </div>
                            <button
                              type="button"
                              className="col btn btn-danger add-remove-btns"
                              onClick={() => onRemoveProduct(item)}
                            >
                              -
                            </button>
                          </div>
                        </div>
                        <div className="col"></div>
                      </span>
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
            <div className="col">
              <div className="right-border">Items Price</div>
              <div className="right-border">Tax Price</div>
              <div className="right-border">
                <strong>Total price</strong>
              </div>
            </div>
            <div className="col">
              <div className="right-border">${cartPrice.toFixed(2)}</div>
              <div className="right-border">${israelTax.toFixed(2)}</div>
              <div className="right-border">
                {" "}
                <strong>${cartSumPrice.toFixed(2)}</strong>
              </div>
            </div>
            <div className="col delete-cart-col">
              <Link to={"/"}>
                <button
                  id="delte-all-cart-btn"
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={deleteCart}
                >
                  Delete Cart
                </button>
              </Link>
            </div>
          </div>
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
              onChange={handleFormChange}
              type="text"
              className="col form-control"
              id="first-name-input"
              name="firstName"
            />
            <label htmlFor="last-name-input" className="col form-label">
              Last Name
            </label>
            <input
              onChange={handleFormChange}
              type="text"
              className="col form-control"
              id="last-name-input"
              name="lastName"
            />
          </div>
          <div className="row mb-3">
            <label htmlFor="email-input" className="col form-label">
              Email address
            </label>
            <input
              onChange={handleFormChange}
              type="email"
              className="col form-control"
              id="email-input"
              name="email"
            />
            <label htmlFor="phone-input" className="col form-label">
              Phone number
            </label>
            <input
              onChange={handleFormChange}
              type="number"
              className="col form-control"
              id="phone-input"
              name="phone"
            />
          </div>
          <div className="row mb-3">
            <label htmlFor="city-input" className="col form-label">
              City / Town
            </label>
            <input
              onChange={handleFormChange}
              type="text"
              className="col form-control"
              id="city-input"
              name="city"
            />
            <label htmlFor="zip-input" className="col form-label">
              Zip Code
            </label>
            <input
              onChange={handleFormChange}
              type="number"
              className="col form-control"
              id="zip-input"
              name="zip"
            />
          </div>
          <div className="row mb-3">
            <label htmlFor="street-input" className="col form-label">
              Street
            </label>
            <input
              onChange={handleFormChange}
              type="text"
              className="col form-control"
              id="street-input"
              name="street"
            />
            <label htmlFor="house-number-input" className="col form-label">
              House Number
            </label>
            <input
              onChange={handleFormChange}
              type="number"
              className="col form-control"
              id="house-number-input"
              name="houseNumber"
            />
          </div>
          <div className="row mb-3">
            <label htmlFor="country-input" className="col form-label">
              Country
            </label>
            <input
              onChange={handleFormChange}
              type="text"
              className="col form-control"
              id="country-input"
              name="country"
            />
            <div className="col"></div>
            <button
              type="submit"
              className="col btn btn-primary"
              disabled={isCartEmpty}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CartPage;
