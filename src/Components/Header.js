import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btn, setbtn] = useState("Login");

  return (
    <div className="shadow-lg m-2 flex justify-between">
      <div className="logoContainer">
        <img className="logo" src={LOGO_URL} alt = "logo"/>
      </div>
      <div className="navitems">
        <ul>
          <li>
            <Link className="nav" to="/">Home</Link>
          </li>
          <li>
            <Link  className="nav" to="/about">About</Link>
          </li>
          <li>
            <Link className="nav"  to="/contact">Support</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() => {
              btn === "Login" ? setbtn("Logout") : setbtn("Login");
            }}
          >
            {btn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
