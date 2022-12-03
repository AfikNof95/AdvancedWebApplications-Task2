import React from "react";
import "./CartPage.css";
import "bootstrap/dist/css/bootstrap.min.css";

function CartPage(props) {
  const { cart, onAdd, onRemove } = props;
  return (
    <div id="cart-page-layout" className="container mt-1">
      <div>
        <h4>Hey User! this is your cart</h4>
      </div>
      <div id="cart-sum-continer" className="container">
        {cart.map((item, index) => (
          <div className="row card-container" key={index}>
            <div className="card mb-3 cart-card">
              <div className="row g-0">
                <div className="col-3 img-container">
                  <img
                    src={`${item.firstPhotoUrl}`}
                    className="img-fluid rounded-start"
                    alt={`${item.title}`}
                  />
                </div>
                <div className="col-6">
                  <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <div className="row">
                      <button
                        type="button"
                        className="col btn btn-success me-2"
                        onClick={() => onAdd(item)}
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
                  <div>${item.price.toFixed(2)}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div id="person-continer" className="container">
        <h5>Personal Details</h5>
        <form>
          <div class="mb-3">
            <label for="" class="form-label">
              First Name
            </label>
            <input type="text" class="form-control" id="" aria-describedby="" />
          </div>
          <div class="mb-3">
            <label for="" class="form-label">
              Last Name
            </label>
            <input type="text" class="form-control" id="" aria-describedby="" />
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">
              Password
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default CartPage;
