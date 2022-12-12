import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./NavbarAndLayout/AppLayout";
import Home from "./Home/Home";
import CartPage from "./Carts/CartPage";
import axios from "axios";
import "./App.css";

function App() {
  const [isCartDialogOpen, setIsCartDialogOpen] = useState(false);
  const [isInCartPage, setIsInCartPage] = useState(false);
  const [userShoppingCart, setUserShoppingCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await axios({
        method: "GET",
        url: "http://localhost:2308/Product/GetAll",
      });
      setProducts(products.data.data);
    };
    fetchProducts();
  }, []);

  const modalToggle = () => {
    setIsCartDialogOpen((prevIsCartDialogOpen) => !prevIsCartDialogOpen);
  };

  const closeDialog = () => {
    setIsCartDialogOpen(false);
  };

  const onAddProduct = (product, isInCartPage) => {
    setUserShoppingCart((prevState) => {
      const foundProduct = prevState.find((item) => item._id === product._id);
      !isInCartPage && setIsCartDialogOpen(true);

      return !!foundProduct
        ? prevState.map((item) =>
            item._id === product._id
              ? { ...foundProduct, qty: foundProduct.qty + 1 }
              : item
          )
        : [...prevState, { ...product, qty: 1 }];
    });
  };

  const onRemoveProduct = (product) => {
    setUserShoppingCart((prevState) => {
      const foundProduct = prevState.find((item) => item._id === product._id);

      return foundProduct.qty > 1
        ? prevState.map((item) =>
            item._id === product._id
              ? { ...foundProduct, qty: foundProduct.qty - 1 }
              : item
          )
        : prevState.filter((item) => item._id !== product._id);
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
                isCartDialogOpen={isCartDialogOpen}
                cart={userShoppingCart}
                onClose={closeDialog}
                onAddProduct={onAddProduct}
                onRemoveProduct={onRemoveProduct}
              />
            }
          >
            <Route
              index
              element={
                <Home
                  onAddProduct={onAddProduct}
                  products={products}
                  isInCartPage={isInCartPage}
                  setIsInCartPage={setIsInCartPage}
                />
              }
            />
            <Route
              path="/Cart"
              element={
                <CartPage
                  cart={userShoppingCart}
                  onAddProduct={onAddProduct}
                  onRemoveProduct={onRemoveProduct}
                  isInCartPage={isInCartPage}
                  setIsInCartPage={setIsInCartPage}
                  setUserShoppingCart={setUserShoppingCart}
                />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
