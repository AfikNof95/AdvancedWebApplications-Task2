import React from "react";
import "./usercart.css";

function UserCart(props) {
  const { onClose } = props;
  return (
    <div id="user-cart">
      <div id="cart-title">
        Cart! <button id="close-cart" onClick={onClose}>X</button>
      </div>
    </div>
  );
}

export default UserCart;
