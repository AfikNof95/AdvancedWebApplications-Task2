import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./NavbarAndLayout/AppLayout";
import Home from "./Home/Home";
import CartPage from "./Carts/CartPage";
import SideCart from "./Carts/UserCart";
import { products } from "../../tmpProducts";
import "./App.css";

function App() {
  const [isCartDialogOpen, setIsCartDialogOpen] = useState(false); // change to start false
  const [userShoppingCart, setUserShoppingCart] = useState([]);

  const modalToggle = () => {
    setIsCartDialogOpen((prevIsCartDialogOpen) => !prevIsCartDialogOpen);
  };

  const closeDialog = () => {
    modalToggle();
  };

  const onAdd = (product) => {
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
    setIsCartDialogOpen(true);
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
            <Route index element={<Home onAdd={onAdd} products={products} />} />
            <Route
              path="/Cart"
              element={
                <CartPage
                  cart={userShoppingCart}
                  onAdd={onAdd}
                  onRemove={onRemove}
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
