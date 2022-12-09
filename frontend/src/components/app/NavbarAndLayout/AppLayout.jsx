import React from "react";
import SideCart from "../Carts/SideCart";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import "./AppLayout.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AppLayout(props) {
  const {
    shoppingQty,
    onCartClick,
    isCartDialogOpen,
    cart,
    onClose,
    onAddProduct,
    onRemoveProduct,
  } = props;

  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top Navbar-wrapper">
        <div className="container-fluid ms-3">
          <Link className="navbar-brand" to={"/"}>
            Afik-Omer Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav mr-auto">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                Home
              </Link>
              <Link className="nav-link" to={"/Cart"}>
                Cart-Checkout
              </Link>
            </div>
            <div className="position-absolute end-0 me-3">
              <div id="shopping-cart-wrapper" onClick={onCartClick}>
                <BsCart3 size={23} />
                {shoppingQty > 0 && <span id="qty-number"> {shoppingQty}</span>}
              </div>
            </div>
          </div>
        </div>
      </nav>
      {isCartDialogOpen && (
        <SideCart
          cart={cart}
          onClose={onClose}
          onAddProduct={onAddProduct}
          onRemoveProduct={onRemoveProduct}
        />
      )}

      <Outlet />
    </>
  );
}

export default AppLayout;
