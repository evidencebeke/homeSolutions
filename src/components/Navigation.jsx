import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";

const Nav = styled.nav`
  height: 70px;
  display: flex;
  align-items: center;
  background: rgba(244, 117, 0, 1);
  justify-content: center;
  color: rgba(255, 255, 255, 1);
  > .navbar-toggler {
    margin-right: auto;
    display: none;
    @media (max-width: 1150px) {
      display: block;
      float: right;
    }
  }
  padding: 5px 0px;
  .logo-image {
    object-fit: contain;
    width: 300px;
  }
  .nav {
    display: flex;
    justify-self: flex-end;
    align-items: center;
    margin-left: 120px;
    @media (max-width: 1150px) {
      flex-direction: column;
      position: relative;
      top: 115px;
      right: 410px;
      height: fit-content;
      width: 100%;
      background: red;
    }
    > * {
      display: block;
      margin-left: 40px;
      text-decoration: none;
      color: rgba(255, 255, 255, 1);
    }
    > button {
      border-radius: 6px;
      height: 40px;
      width: 150px;
      background: linear-gradient(90deg, #268082 0%, #005051 100%);
    }
  }
`;

const Navigation = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <Nav openNav={openNav}>
      <div className="logo">
        <img src={logo} alt="Logo" className="logo-image" />
      </div>
      <div className="navbar-toggler">Open</div>
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
