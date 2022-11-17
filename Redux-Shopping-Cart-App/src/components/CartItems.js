import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";
const CartItems = () => {
  const cartItems = useSelector(state => state.cart.cartItems)
  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cartItems && cartItems.length > 0 && cartItems.map((item,i) => {
          return <li key={item.id}>
            <CartItem quantity={item.quantity} id={item.id} price={item.price} name={item.name} />
          </li>
        })}
      </ul>
    </div>
  );
};

export default CartItems;
