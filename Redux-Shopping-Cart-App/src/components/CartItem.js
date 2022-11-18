import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "../store/cart-slice";
import { sendCartData } from "../store/cart-actions";
import { updateData } from "../store/cart-slice";
const CartItem = ({ name, quantity, price, id }) => {
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(cartActions.removeItem(id));
  };
  const addHandler = () => {
   dispatch(updateData({
    id,
    name,price
   }))
    // dispatch(
    //   cartActions.addItem({
    //     id,
    //     name,
    //     price,
    //   })
    // );
  };
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${quantity * +price}</article>
      <button className="cart-actions" onClick={removeHandler}>
        -
      </button>
      <button className="cart-actions" onClick={addHandler}>
        +
      </button>
    </div>
  );
};

export default CartItem;
