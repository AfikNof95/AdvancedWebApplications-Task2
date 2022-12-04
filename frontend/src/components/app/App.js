import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./NavbarAndLayout/AppLayout";
import Home from "./Home/Home";
import CartPage from "./Carts/CartPage";
import SideCart from "./Carts/UserCart";
import { products } from "../../tmpProducts";
import "./App.css";

function App() {
  const [isCartDialogOpen, setIsCartDialogOpen] = useState(false);
  const [userShoppingCart, setUserShoppingCart] = useState([]);
  const [inCart, setInCart] = useState(false);

  const modalToggle = () => {
    setIsCartDialogOpen((prevIsCartDialogOpen) => !prevIsCartDialogOpen);
  };

  const closeDialog = () => {
    modalToggle();
  };

  const onAdd = (product, inCart) => {
    const exist = userShoppingCart.find((item) => item.id === product.id);
    if (exist) {
      const newUserShoppingCart = userShoppingCart.map((item) =>
        item.id === product.id ? { ...exist, qty: exist.qty + 1 } : item
      );
      setUserShoppingCart(newUserShoppingCart);
    } else {
      const newUserShoppingCart = [...userShoppingCart, { ...product, qty: 1 }];
      setUserShoppingCart(newUserShoppingCart);
    }
    !inCart && setIsCartDialogOpen(true);
  };

  const onRemove = (product) => {
    const exist = userShoppingCart.find((item) => item.id === product.id);
    if (exist.qty === 1) {
      const newUserShoppingCart = userShoppingCart.filter(
        (item) => item.id !== product.id
      );
      setUserShoppingCart(newUserShoppingCart);
    } else {
      const newUserShoppingCart = userShoppingCart.map((item) =>
        item.id === product.id ? { ...exist, qty: exist.qty - 1 } : item
      );
      setUserShoppingCart(newUserShoppingCart);
    }
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AppLayout
                shoppingQty={userShoppingCart.length}
                onCartClick={modalToggle}
              />
            }
          >
            <Route
              index
              element={
                <Home
                  onAdd={onAdd}
                  products={products}
                  inCart={inCart}
                  setInCart={setInCart}
                />
              }
            />
            <Route
              path="/Cart"
              element={
                <CartPage
                  cart={userShoppingCart}
                  onAdd={onAdd}
                  onRemove={onRemove}
                  inCart={inCart}
                  setInCart={setInCart}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
      {isCartDialogOpen && (
        <SideCart
          cart={userShoppingCart}
          onClose={closeDialog}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      )}
    </div>
  );
}

export default App;
