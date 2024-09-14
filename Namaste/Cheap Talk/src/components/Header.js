import React, { useEffect, useState } from "react";
import Logo from "../assets/img/foodVilla.jpeg";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <>
      <a href="/">
        <img className="logo" alt="loogoo" src={Logo} />
      </a>
    </>
  );
};

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // useEffect(() => {
  //   console.log("useEffect");
  // }, []);

  // console.log("render");

  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
            <li>Cart</li>
          </ul>
        </div>

        {/* {isLoggedIn ? (
          <button onClick={() => setLoggedIn(false)}>LogOut</button>
        ) : (
          <button onClick={() => setLoggedIn(true)}>Login</button>
        )} */}

        <button className="login" onClick={() => setLoggedIn(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </>
  );
};
export default Header;
