import React from "react";
import "../../../scss/dist/CategoryBlock.css";
import accountingIcon from "../../../assets/images/money.png";
const CategoryBlock = () => {
  return (
    <div className="CategoryBlock">
      <div className="iconContainer">
        <img className="categoryIcon" src={accountingIcon} alt="" />
      </div>
      <div className="infoContainer">
        <h2 className="CategoryTitle">Accounting / Finance</h2>
        <p className="openPosContainer">(1 Open Position)</p>
      </div>
    </div>
  );
};

export default CategoryBlock;
