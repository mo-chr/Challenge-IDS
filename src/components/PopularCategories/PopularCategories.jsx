import "../../scss/dist/PopularCategories.css";

import React from "react";
import Category from "./category/CategoryBlock";

const PopularCategories = () => {
  return (
    <div className="popularCategories contained">
      <div className="Title">Popular Job Categories</div>
      <div className="MiniTitle"> 2020 jobs live - 293 added today</div>

      <div className="categoriesContainer">
        <span className="category">
          <Category />
        </span>
        <span className="category">
          <Category />
        </span>
        <span className="category">
          <Category />
        </span>
        <span className="category">
          <Category />
        </span>
        <span className="category">
          <Category />
        </span>
        <span className="category">
          <Category />
        </span>
        <span className="category">
          <Category />
        </span>
        <span className="category">
          <Category />
        </span>
        <span className="category">
          <Category />
        </span>
      </div>
    </div>
  );
};

export default PopularCategories;
