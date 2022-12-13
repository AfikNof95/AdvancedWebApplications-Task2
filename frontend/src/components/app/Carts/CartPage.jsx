import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Dash } from "react-bootstrap-icons";
import axios from "axios";
import "./CartPage.css";

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

  const [isFormValid, setIsFormValid] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleModalClose = () => {
    setShowModal(false);
  };
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
    for (let field of Object.keys(contactInfo)) {
      if (contactInfo[field].trim() === "") {
        setIsFormValid(false);
        return;
      }
    }
    setIsFormValid(true);
    const products = cart.map((product) => {
      return { count: product.qty, product: product.id };
    });
    try {
      axios({
        method: "POST",
        url: "http://localhost:2308/Order/Add",
        data: { ...contactInfo, products },
      });
      setShowModal(true);
      deleteCart();
    } catch (err) {
      console.log("There was an error sending the information");
      console.log(err);
    }
  };

  return (
    <div id="cart-page-layout" className="container mt-1">
      <div>
        {cart.length == 0 && (
          <h3 className="fw-bolder text-black">Your cart is empty!</h3>
        )}
      </div>
      {cart.length > 0 && (
        <div id="cart-sum-continer" className="container">
          <h3 className="fw-bolder text-black">Cart</h3>
          {cart.map((item, index) => (
            <div className="row card-container" key={index}>
              <div className="card cart-card" style={{ paddingLeft: 0 }}>
                <div className="row align-items-center g-0">
                  <div className="col-2 img-container">
                    <img
                      src={`${item.firstPhotoUrl}`}
                      className="img-fluid rounded-start"
                      alt={`${item.name}`}
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="col-7 d-flex flex-column body-container">
                    <div className="card-body">
                      <span>
                        <h5 className="card-title text-left">{item.name}</h5>
                      </span>
                      <div className="text-left description-wrapper">
                        {item.description}
                      </div>
                      <span className="row buttons-section">
                        <div className="row">
                          <button
                            type="button"
                            className="col btn btn-success"
                            onClick={() => onAddProduct(item, isInCartPage)}
                          >
                            <Plus color="white" size={25}></Plus>
                          </button>
                          <div className="col qty-wrapper ps-2 me-2 ms-2 d-flex justify-content-center align-items-center">
                            {item.qty}
                          </div>
                          <button
                            type="button"
                            className="col btn btn-danger"
                            onClick={() => onRemoveProduct(item)}
                          >
                            <Dash color="white" size={25}></Dash>
                          </button>
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
            <u>Payment summarize</u>
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
                  className="btn btn-danger"
                  onClick={deleteCart}
                >
                  Delete Cart
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      {cart.length > 0 && (
        <div id="person-continer" className="container">
          <h5 className="mb-3 mt-2">Personal Details To Complete Checkout</h5>
          <hr />
          <form onSubmit={onSubmitHandler}>
            <div className="row mb-3">
              <div className="col-6">
                <label htmlFor="first-name-input" className="form-label">
                  First Name
                </label>
                <input
                  required
                  onChange={handleFormChange}
                  type="text"
                  className="form-control"
                  id="first-name-input"
                  name="firstName"
                />
              </div>

              <div className="col-6">
                <label htmlFor="last-name-input" className="form-label">
                  Last Name
                </label>
                <input
                  required
                  onChange={handleFormChange}
                  type="text"
                  className="form-control"
                  id="last-name-input"
                  name="lastName"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <label htmlFor="email-input" className="form-label">
                  Email address
                </label>
                <input
                  required
                  onChange={handleFormChange}
                  type="email"
                  className="form-control"
                  id="email-input"
                  name="email"
                />
              </div>

              <div className="col-6">
                <label htmlFor="phone-input" className="form-label">
                  Phone number
                </label>
                <input
                  required
                  onChange={handleFormChange}
                  type="number"
                  className="form-control"
                  id="phone-input"
                  name="phone"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <label htmlFor="city-input" className="form-label">
                  City / Town
                </label>
                <input
                  required
                  onChange={handleFormChange}
                  type="text"
                  className="form-control"
                  id="city-input"
                  name="city"
                />
              </div>

              <div className="col-6">
                <label htmlFor="street-input" className="form-label">
                  Street
                </label>
                <input
                  required
                  onChange={handleFormChange}
                  type="text"
                  className="form-control"
                  id="street-input"
                  name="street"
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-6">
                <label htmlFor="house-number-input" className="form-label">
                  House Number
                </label>
                <input
                  required
                  onChange={handleFormChange}
                  type="number"
                  className="form-control"
                  id="house-number-input"
                  name="houseNumber"
                />
              </div>

              <div className="col-6">
                <label htmlFor="zip-input" className="form-label">
                  Zip Code
                </label>
                <input
                  required
                  onChange={handleFormChange}
                  type="number"
                  className="form-control"
                  id="zip-input"
                  name="zip"
                />
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-6">
                <label htmlFor="country-input" className="form-label">
                  Country
                </label>
                <input
                  required
                  onChange={handleFormChange}
                  type="text"
                  className="form-control"
                  id="country-input"
                  name="country"
                />
              </div>
            </div>
            <div className="row mb-3 p-3">
              <button
                type="submit"
                className="col btn btn-submit"
                disabled={isCartEmpty}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      )}
      <div
        className={` p-2 flex-row flex-wrap submit-modal ${
          showModal ? "show" : ""
        }`}
      >
        <div className="w-100">
          <h3>Thank you for your order</h3>
        </div>

        <div className="w-100 m-auto">
          <span>Order submitted successfully!</span>
        </div>
        <div className="mt-auto w-100 justify-content-end d-flex">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleModalClose}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
