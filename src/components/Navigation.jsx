import React, { useState } from "react";
import { Nav } from "../assets/styles.jsx";
import logo from "../assets/logo.svg";

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);

  const navToggle = () => {
    setOpenNav((prevState) => !prevState);
    console.log(openNav)
  };
  return (
    <Nav openNav={openNav}>
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="navbar-toggler">
        <span onClick={navToggle}>Open</span>
      </div>
      <div className="nav">
        <a href="#">For Sale</a>
        <a href="#">For Rent</a>
        <a href="#">Short Let</a>
        <a href="#">Blog</a>
        <a href="#">Agent</a>
        <button>Post For FREE</button>
      </div>
    </Nav>
  );
};

export default Navigation;
