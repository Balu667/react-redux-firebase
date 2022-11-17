import React from "react";
import Cart from "./Cart";
import "./Header.css";
import { actions } from "../store/auth-slice";
import { useDispatch } from "react-redux";
const Header = () => {

  const dispatch = useDispatch();
  const logoutHandler = () => {
   dispatch(actions.logOut());
  }
  return (
    <header>
      <nav className="header-nav">
        <ul className="header-ul">
          <li>
            <h2
              className="header-h2"
              style={{ fontFamily: "monospace", fontSize: "30px" }}
            >
              Redux Shopping App
            </h2>
          </li>
          
          
          
          <li>
            <div className="flex-container">
            <button onClick={logoutHandler} className="logout-button">Logout</button>
            <Cart />
            </div>
          
            
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
