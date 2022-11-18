import React, { useEffect } from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector ,useDispatch} from "react-redux";
import { fetchData } from "../store/cart-actions";
const CartItems = () => {
 
  const cart = useSelector(state => state.cart);


  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        {cart.cartItems && cart.cartItems.length > 0 && cart.cartItems.map((item,i) => {
          return <li key={item.id}>
            <CartItem quantity={item.quantity} id={item.id} price={item.price} name={item.name} />
          </li>
        })}
      </ul>
    </div>
  );
};

export default CartItems;
