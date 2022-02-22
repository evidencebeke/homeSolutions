import React, { useState } from "react";
import { Head } from "../assets/styles";

const Header = () => {
  const [propertyType, setPropertyType] = useState("forRent");
  const handleChange = (e) => {
    setPropertyType(e.target.value);
  };
  console.log(propertyType);
  return (
    <Head>
      <div className="header-content-container">
        <div className="header-text">
          <h1>Find your next property</h1>
        </div>
        <div className="property-type">
          <div>
            <input
              type="radio"
              name="type"
              id="for-rent"
              onChange={handleChange}
              checked={propertyType === "forRent"}
              value="forRent"
            />
            <label htmlFor="for-rent">For Rent</label>
          </div>
          <div>
            <input
              type="radio"
              name="type"
              id="for-sale"
              onChange={handleChange}
              checked={propertyType === "forSale"}
              value="forSale"
            />
            <label htmlFor="for-sale">For sale</label>
          </div>
          <div>
            <input
              type="radio"
              name="type"
              id="short-let"
              onChange={handleChange}
              checked={propertyType === "shortLet"}
              value="shortLet"
            />
            <label htmlFor="short-let">Short Let</label>
          </div>
          <div>
            <input
              onChange={handleChange}
              value="land"
              checked={propertyType === "land"}
              type="radio"
              name="type"
              id="land"
            />
            <label htmlFor="land">Land</label>
          </div>
        </div>
        <form action="">
          <input type="text" placeholder="Enter a state, locality or area" />
          <div className="property-deta">
            <select name="" id="">
              <option value="">4</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
            <select name="" id="">
              <option value="">4</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
            <select name="" id="">
              <option value="">4</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
            <select name="" id="">
              <option value="">4</option>
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
            </select>
          </div>
        </form>
      </div>
    </Head>
  );
};

export default Header;
