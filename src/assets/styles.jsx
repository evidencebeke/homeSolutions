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
    display: flex;
    align-items: center;
    justify-content: center;

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
      background: grey;
      left: 0;
      justify-content: space-around;
      width: 100vw;
      margin: 0;
      overflow: hidden;
      z-index: 3;

      height: ${(props) => (props.openNav ? "50vh" : "0%")};
      transition-duration: 0.05s;
      transition-timing-function: ;
    }
    > * {
      display: block;
      margin-left: 40px;
      text-decoration: none;
      color: rgba(255, 255, 255, 1);
      @media (max-width: 1150px) {
        border-bottom: 1px solid white;
        width: 100%;
      }
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
  display: flex;
  top: 80px;
  color: white;
  height: fit-content;

  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  justify-content: center;
  box-sizing: border-box;
  > .header-content-container {
    padding: 100px 0;
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
      padding: 15px 0;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 65vw;
      border-radius: 15px;
      background: rgba(255, 255, 255, 1);
      border-radius: 15px;
      padding: 20px;
      > button {
        background: rgba(244, 117, 0, 1);
        color: white;
        width: 150px;
        height: 30px;
        border-radius: 14px;
      }
      > div {
        width: 90%;

        display: flex;
        flex-wrap: wrap;
        > select {
          min-width: 100px;
          margin: 20px 4px;
          height: 40px;
          border-radius: 15px;
          color: grey;
          display: block;
          flex: 1;
        }
      }
      > input {
        display: block;
        width: 90%;
        height: 6vh;
        border-radius: 15px;
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

          width: 15vw;
          margin-left: 3px;
          height: 60px;
          align-items: center;
          text-align: center;
          justify-content: center;
          border-top-left-radius: 13px;
          border-top-right-radius: 13px;
          @media (max-width: 900px) {
            font-size: 0.6em;

            height: 40px;
          }
        }
      }
    }
    > .header-text {
      font-weight: 800;
      margin-bottom: 20px;
      @media (max-width: 700px) {
        display: none;
      }

      > h1 {
        font-size: 3vw;
      }
    }
  }
`;

export const MainContainer = styled.main`
  position: relative;
  top: 100px;
  display: flex;
  flex-direction: column;

  justify-content: center;
  text-align: left;
  margin-left: 12px;
`;
