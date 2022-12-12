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
      <nav className="navbar sticky-top Navbar-wrapper">
        <div className="container ms-3">
          <div className="d-flex justify-content-start align-items-baseline">
            <Link className="navbar-brand" to={"/"}>
              Afik-Omer Store
            </Link>
            <Link className="nav-link active ms-4" aria-current="page" to={"/"}>
              Home
            </Link>
            <Link className="nav-link ms-4" to={"/Cart"}>
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
