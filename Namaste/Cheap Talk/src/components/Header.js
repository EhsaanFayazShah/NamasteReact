import React, { useState } from "react";
const loggedInUser = () => {
  //api call for authentication
  return true;
};
const Title = () => {
  return (
    <>
      <a href="/">
        <img
          className="logo"
          src="https://cdn.dotpe.in/longtail/store-logo/1023934/dOZPIFia.jpeg"
        />
      </a>
    </>
  );
};

const Header = () => {
  const [isLoggedIn, setLoggedIn] = useState(true);
  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>

        {isLoggedIn ? (
          <button onClick={() => setLoggedIn(false)}>LogOut</button>
        ) : (
          <button onclick={() => setLoggedIn(true)}>Login</button>
        )}
      </div>
    </>
  );
};
export default Header;
