import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";
import "./Cart.css";
const Cart = () => {
  const quantity = useSelector(state => state.cart.cartItems);
  
  const dispatch = useDispatch();

  const showCartFn = () => {
    dispatch(cartActions.showCartHandler())
  }

  return (
    <div className="cartIcon">
      <h3 onClick={showCartFn}>Cart: {quantity ? quantity.length : 0} Items</h3>
    </div>
  );
};

export default Cart;
