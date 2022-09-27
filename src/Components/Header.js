import React from "react";
import "../Style/Header.css";
import logo from "../Assets/rebel-logo.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header-limiter">
        <img className="logo" src={logo} />
        {/* <nav>
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav> */}
      </div>
    </header>
  );
};

export default Header;
