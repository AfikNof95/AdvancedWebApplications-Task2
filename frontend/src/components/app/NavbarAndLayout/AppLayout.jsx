import React, { useState, useEffect } from "react";
import SideCart from "../Carts/SideCart";
import { Link, NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import "./AppLayout.css";

function AppLayout(props) {
  const {
    onCartClick,
    isCartDialogOpen,
    cart,
    onClose,
    onAddProduct,
    onRemoveProduct,
  } = props;

  const [shoppingQty, setShoppingQty] = useState(() => {
    let count = 0;
    for (let product of Object.values(cart)) {
      count += product.qty;
    }
    return count;
  });

  useEffect(() => {
    let count = 0;
    for (let product of Object.values(cart)) {
      count += product.qty;
    }
    setShoppingQty(count);
  }, [cart]);
  return (
    <>
      <nav className="navbar navbar-dark bg-dark d-flex flex-row justify-content-between">
        <div className="d-flex flex-row justify-content-start ms-3 align-items-baseline">
          <Link className="navbar-brand" to={"/"}>
            Afik-Omer Store
          </Link>
          <NavLink
            className={(navData) =>
              navData.isActive ? "nav-item active" : "nav-item"
            }
            aria-current="page"
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink className="nav-item ms-4" to={"/Cart"} onClick={onClose}>
            Checkout
          </NavLink>
        </div>
        <div className="me-3 text-white">
          <div
            id="shopping-cart-wrapper"
            onClick={onCartClick}
            className="rounded-circle"
          >
            <BsCart3 size={23} />
            {shoppingQty > 0 && (
              <span id="qty-number" className="rounded-circle">
                {" "}
                {shoppingQty}
              </span>
            )}
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
