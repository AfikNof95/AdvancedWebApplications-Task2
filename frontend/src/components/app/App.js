import React, { useState } from "react";
import AppNavbar from "./navbar/AppNavbar";
import Mainbody from "./mainbody/Mainbody";
import UserCart from "./usercart/UserCart";
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
      <AppNavbar
        shoppingQty={userShoppingCart.length}
        onCartClick={modalToggle}
      />
      <Mainbody onAdd={onAdd} products={products} />
      {isCartDialogOpen && (
        <UserCart
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
