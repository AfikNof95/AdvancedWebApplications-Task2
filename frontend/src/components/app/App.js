import React, { useState } from "react";
import AppNavbar from "./navbar/AppNavbar";
import Mainbody from "./mainbody/Mainbody";
import UserCart from "./usercart/UserCart";
import "./App.css";

function App() {
  const [isCartDialogOpen, setIsCartDialogOpen] = useState(true);
  const [userShoppingCart, setUserShoppingCart] = useState({});

  const modalToggle = () => {
    setIsCartDialogOpen((prevIsCartDialogOpen) => !prevIsCartDialogOpen);
  };

  const closeDialog = () => {
    modalToggle();
  };

  const openDialog = () => {
    setIsCartDialogOpen(true);
  };

  return (
    <div className="App">
      <AppNavbar />
      <Mainbody onOpen={openDialog} />
      {isCartDialogOpen && <UserCart onClose={closeDialog} />}
    </div>
  );
}

export default App;
