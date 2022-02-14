import React from "react";
import styled from "styled-components";
import bannerImage from "../assets/LagosCity.svg";
const Head = styled.header`
  height: 75vh;
  background-image: url(${bannerImage});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;

  & .cover {
    color: white;
    width: 100%;
    height: 100%;

    background: #00505199;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    > .form-container {
      background: white;
      position: relative;
      bottom: 10px;
      padding: 20px 45px;

      display: flex;
      align-items: center;
      flex-direction: column;
      border-radius: 25px;

      justify-content: center;
      width: 78vw;

      .selects {
        display: flex;
      }
      .form > input {
        width: 100%;
      }
      input,
      select {
        border: 2px solid grey;
        color: #242121;
        height: 30px;

        margin-bottom: 6px;
        border-radius: 15px;
      }
    }
    > .buttons {
      object-fit: contain;
      width: 80%;

      justify-content: center;
      display: flex;
      > button {
        background: #f47500;
        border-radius: 15px;
        border: none;
        color: white;
        font-weight: 800;
        margin-left: 5px;
        width: 290px;
        height: 78px;
        font-size: 16px;
        @media (max-width: 900px) {
          font-size: 12px;
          margin-left: 2px;
          width: 25%;

          height: 40px;
          border-radius: 0;
        }
      }
    }
  }
  h1 {
    @media (max-width: 900px) {
      font-size: 24px;
    }
  }
`;
const Header = () => {
  return (
    <Head>
      <div className="cover">
        <h1>Find your next property</h1>
        <div className="buttons">
          <button>For rent</button>
          <button>For Sale</button>
          <button>Short Let</button>
          <button>Land</button>
        </div>
        <div className="form-container">
          <form className="form">
            <input type="text" placeholder="Enter a place, locality or area" />
            <div className="selects">
              {" "}
              <select name="" id="">
                <option value="">Type</option>
                <option value="apartment">Flat/Apartment</option>
                <option value="house">House</option>
                <option value="land">Land</option>
                <option value="commercial">Commercial</option>
              </select>
              <select name="" id="">
                <option value="">Bed</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <select name="" id="">
                <option value="">Min Amount</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
              <select name="" id="">
                <option value="">Min Amount</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </Head>
  );
};

export default Header;
