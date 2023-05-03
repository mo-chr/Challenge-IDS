import "../../scss/dist/Hero.css";
import Search from "../../assets/images/search.png";
import Location from "../../assets/images/location.png";
import ManImage from "../../assets/images/slider1.png";
import work from "../../assets/images/work.png";
import agency from "../../assets/images/agency.png";
import upload from "../../assets/images/upload.png";
import React from "react";
import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

const Hero = () => {
  return (
    <div className="Hero">
      <div className="HeroMain contained">
        <div className="leftContainer">
          <h1 className="Title">
            There Are <span className="shiny">93,178 </span>
            Postings Here For you !
          </h1>
          <h4 className="lightSub">
            Find jobs, Employment & Carreer Opportunities
          </h4>
          <form action="" className="jobSearchContainer">
            <div className="searchBarContainer inputContainer">
              <img className="inputIcon" src={Search} alt="" />
              <input
                className="inputSearch"
                type="search"
                name=""
                id="searchBarHero"
                placeholder="Job title,keywords..."
              />
            </div>
            <div className="cityPostContainer inputContainer">
              <img className="inputIcon" src={Location} alt="" />
              <select className="inputSelect" name="selectCity" id="selectCity">
                <option value="dummy 1"> City or postcode</option>
                <option value="dummy 2"> dummy 1</option>
                <option value="dummy 3"> dummy 2</option>
              </select>
            </div>
            <button className="btn FindJobButton"> Find Jobs</button>
          </form>
          <p className="popularSearchesHero">
            Popular Searches:
            <span className="unfocused">
              Designer,Developer,Web, IOS, PHP, Senior, Engineer
            </span>
          </p>
        </div>
        <div className="rightContainer">
          <img
            className="manImage floatingImage"
            src={ManImage}
            alt="Image of a man with hands crossed"
          />
          <img
            className="work floatingImage"
            src={work}
            alt=" floating field 1"
          />
          <img
            className="agency floatingImage"
            src={agency}
            alt="floating field 2"
          />
          <img
            className="upload floatingImage"
            src={upload}
            alt="floating field 3"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
