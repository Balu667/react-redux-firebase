import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../store/auth-slice";

import "./Auth.css";

const Auth = () => {
  const dispatch = useDispatch()
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(actions.logIn());
  }
  return (
    <div className="container">
      <h1>Login</h1>{" "}
      <form onSubmit={submitHandler}>
        <label htmlFor="id">Id</label>
        <input type="text" name="id" id="id" />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Auth;
