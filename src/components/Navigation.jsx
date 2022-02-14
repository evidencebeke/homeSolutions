import React, { useState } from "react";
import styled from "styled-components";
import logoImage from "../assets/logoimage.svg";

const Nav = styled.nav`
  color: white;

  height: 5rem;
  background-color: #f47500;
  align-items: center;
  display: flex;

  padding: 0 2rem;

  > .logo {
    display: flex;
    max-width: 20%;
    .logo-image {
      width: 40px;
    }
    > .logo-text {
      margin-left: 0.9rem;
      font-size: 1rem;
    }
  }
  & .nav {
    flex: 1;
    display: flex;
    align-items: center;
    margin-left: auto;
    justify-content: flex-end;

    > .nav-list {
      display: flex;
      font-weight: bold;
      justify-content: flex-end;
      align-items: center;
      flex: 1;
      @media (max-width: 900px) {
        background: #f4760089;
        box-sizing: contain;
        flex-direction: column;
        justify-content: flex-start;
        position: absolute;
        top: 100px;
        left: 0;
        width: 100%;
        overflow: hidden;
        height: ${(props) => (props.showMenu ? "100vh" : "0")};
        transition: 0.6s;
      }
      > a {
        display: block;
        margin-left: 15px;
        > button {
          background: linear-gradient(90deg, #268082 0%, #005051 100%);
          border-radius: 6px;
          height: 30px;
          color: white;
        }
      }
    }
  }
  & .toggle-icon {
    @media (min-width: 900px) {
      display: none;
    }

    margin-left: auto;
  }
`;

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const menuToggler = () => {
    setShowMenu((prevState) => !prevState);
  };
  return (
    <Nav showMenu={showMenu}>
      <div className="logo">
        <img className="logo-image" src={logoImage} alt="" />
        <p className="logo-text">HomeSolutions.ng</p>
      </div>
      <div className="nav">
        <div className="toggle-icon">
          <p onClick={menuToggler}>{showMenu ? "Close" : "Open"}</p>
        </div>
        <div className="nav-list">
          <a>For Sale</a>
          <a>For Rent</a>
          <a>Short Let</a>
          <a>Blog</a>
          <a>Agents</a>
          <a>
            <button>Post For FREE</button>
          </a>
        </div>
      </div>
    </Nav>
  );
};

export default Navigation;
