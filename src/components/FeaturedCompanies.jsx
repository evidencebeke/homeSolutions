import React, { useState, useEffect } from "react";
import styled from "styled-components";
import artBoard from "../assets/Artboard.png";
import icon from "../assets/icon3.png";

const FeatComp = styled.div`
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
  > h3 {
    color: rgba(0, 80, 81, 1);
    @media (max-width: 768px) {
      text-align: center;
    }
  }
  > .logos {
    display: flex;
    overflow: scroll;
    margin-top: 20px;

    ::-webkit-scrollbar {
      display: none;
    }
    @media (max-width: 768px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    > .logo-container {
      padding: 10px;
      background: white;
      /* min-width: 100px; */
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: contain;
      border-radius: 15px;
      box-shadow: 5px 10px 5px 10px lightgrey;
      margin-right: 30px;
      margin-bottom: 20px;
      @media (max-width: 768px) {
        background: transparent;
        box-shadow: none;
      }
      > img {
        max-width: 150px;
        object-fit: contain;
      }
    }
  }
`;

const FeaturedCompanies = () => {
  return (
    <FeatComp>
      <h4>Featured Real Estate Companies</h4>
      <div className="logos">
        <div className="logo-container">
          <img src={artBoard} alt="Artboad" />
        </div>
        <div className="logo-container">
          <img src={icon} alt="Artboad" />
        </div>
      </div>
    </FeatComp>
  );
};

export default FeaturedCompanies;
