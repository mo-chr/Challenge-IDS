import "../../scss/dist/Header.css";

import React from "react";
import langLogo from "../../assets/images/lang.png";
const Header = () => {
  return (
    <div className="Navbar">
      <div className="InnerHeader">
        <button className="btn">Login/Register</button>
        <div className="selector-container">
          <img className="langLogo" src={langLogo} alt="" />
          <select className="language no-outline" id="language">
            <option className="no-outline" value="En">
              EN
            </option>
            <option className="no-outline" value="Ar">
              AR
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
