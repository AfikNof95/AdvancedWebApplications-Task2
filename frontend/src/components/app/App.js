import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./NavbarAndLayout/AppLayout";
import Home from "./Home/Home";
import CartPage from "./Carts/CartPage";
import SideCart from "./Carts/SideCart";
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
    setIsCartDialogOpen(false);
  };

  const onAdd = (product, inCart) => {
    setUserShoppingCart((prevState) => {
      const foundProduct = prevState.find((item) => item.id === product.id);
      !inCart && setIsCartDialogOpen(true);

      return !!foundProduct
        ? prevState.map((item) =>
            item.id === product.id
              ? { ...foundProduct, qty: foundProduct.qty + 1 }
              : item
          )
        : [...prevState, { ...product, qty: 1 }];
    });
  };

  const onRemove = (product) => {
    setUserShoppingCart((prevState) => {
      const foundProduct = prevState.find((item) => item.id === product.id);

      return foundProduct.qty > 1
        ? prevState.map((item) =>
            item.id === product.id
              ? { ...foundProduct, qty: foundProduct.qty - 1 }
              : item
          )
        : prevState.filter((item) => item.id !== product.id);
    });
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
        {isCartDialogOpen && (
          <SideCart
            cart={userShoppingCart}
            onClose={closeDialog}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
