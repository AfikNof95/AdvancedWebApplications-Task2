import React from "react";
import "./CartPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CartPage(props) {
  const { cart, onAdd, onRemove, inCart, setInCart } = props;
  setInCart(true);
  return (
    <div id="cart-page-layout" className="container mt-1">
      <div>
        <h4>Hey User! this is your cart</h4>
      </div>
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
                        onClick={() => onAdd(item, inCart)}
                      >
                        +
                      </button>
                      <div className="col qty-wrapper me-2">{item.qty}</div>
                      <button
                        type="button"
                        className="col btn btn-danger"
                        onClick={() => onRemove(item)}
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
                  <div>${item.qty * item.price} total</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id="person-continer" className="container">
        <h5 className="mb-3 mt-2">Personal Details</h5>
        <hr />
        <form>
          <div className="row mb-3">
            <label for="first-name-input" class="col form-label">
              First Name
            </label>
            <input
              type="text"
              className="col form-control"
              id="first-name-input"
            />
            <label for="last-name-input" className="col form-label">
              Last Name
            </label>
            <input
              type="text"
              className="col form-control"
              id="last-name-input"
            />
          </div>

          <div className="row mb-3">
            <label for="email-input" className="col form-label">
              Email address
            </label>
            <input type="email" className="col form-control" id="email-input" />
            <label for="phone-input" className="col form-label">
              Phone number
            </label>
            <input
              type="number"
              className="col form-control"
              id="phone-input"
            />
          </div>

          <div className="row mb-3">
            <label for="city-input" className="col form-label">
              City / Town
            </label>
            <input type="text" className="col form-control" id="city-input" />
            <label for="zip-input" className="col form-label">
              Zip Code
            </label>
            <input type="number" className="col form-control" id="zip-input" />
          </div>
          <div className="row mb-3">
            <label for="street-input" className="col form-label">
              Street
            </label>
            <input type="text" className="col form-control" id="street-input" />
            <label for="house-number-input" className="col form-label">
              House Number
            </label>
            <input
              type="number"
              className="col form-control"
              id="house-number-input"
            />
          </div>
          <div className="row mb-3">
            <label for="country-input" className="col form-label">
              Country
            </label>
            <input
              type="text"
              className="col form-control"
              id="country-input"
            />
            <div className="col"></div>
            <button type="submit" class="col btn btn-primary">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CartPage;
