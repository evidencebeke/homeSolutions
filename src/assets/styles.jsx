import styled from "styled-components";

import lagosCity from "./lagosCity.png";
export const Nav = styled.nav`
  position: fixed;

  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  background: rgba(244, 117, 0, 1);
  justify-content: center;
  color: rgba(255, 255, 255, 1);
  z-index: 99;
  > .navbar-toggler {
    margin: 0 20px 0 auto;
    /* margin-left: auto; */
    @media (min-width: 1150px) {
      display: none;
    }
  }
  .logo {
    margin-left: 20px;
    display: flex;
    align-items: center;
  }
  padding: 5px 0px;
  .logo-image {
    object-fit: contain;
    width: 16rem;
    @media (max-width: 400px) {
      width: 13rem;
    }
  }
  .nav {
    display: flex;

    align-items: center;
    margin-left: 120px;

    @media (max-width: 1150px) {
      flex-direction: column;
      position: absolute;
      top: 80px;
      background: red;
      left: 0;
      justify-content: center;
      width: 100vw;
      margin: 0;
      overflow: hidden;
      z-index: 3;

      height: ${(props) => (props.openNav ? "50vh" : "0%")};
      transition-duration: 0.1s;
    }
    > * {
      display: block;
      margin-left: 40px;
      text-decoration: none;
      color: rgba(255, 255, 255, 1);
    }
    > button {
      border-radius: 6px;
      border: none;
      height: 40px;
      width: 150px;
      font-family: "Sora", sans-serif;
      background: linear-gradient(90deg, #268082 0%, #005051 100%);
    }
  }
`;
export const Head = styled.header`
  background-image: url(${lagosCity});

  position: relative;
  top: 80px;
  color: white;

  height: 80vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  justify-content: center;
  box-sizing: border-box;
  > .header-content-container {
    height: 100%;
    width: 100%;
    background: rgba(0, 80, 81, 0.6);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    > form {
      /* width: 85%; */
      background: red;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      > input {
        display: block;
        width: 60vw;
      }
    }
    > .property-type {
      display: flex;
      justify-content: space-between;

      > div {
        > input {
          display: none;
        }
        > input:checked + label {
          background: rgba(255, 255, 255, 1);
          color: rgba(47, 61, 70, 1);
        }
        label {
          display: flex;
          background: rgba(244, 117, 0, 1);

          width: 20vw;
          margin-left: 3px;
          height: 60px;
          align-items: center;
          text-align: center;
          justify-content: center;
          border-radius: 15px;
          @media (max-width: 900px) {
            font-size: 12px;

            border-radius: 0;
          }
        }
      }
    }
    > .header-text {
      font-weight: 800;
      @media (max-width: 700px) {
        display: none;
      }

      > h1 {
        font-size: 3vw;
      }
    }
  }
`;
