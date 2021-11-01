import React from "react";
import { Instagram, Twitter, Facebook } from "react-bootstrap-icons";
import star from "./assets/images/star.svg";

const Top = () => {
  return (
    <div className="top-container">
      <div className="top-contents-wrapper">
        <div className="top-contents">
          <img src={star} alt="star" className="star-front" />
          <p className="header">
            <span className="header-bold">Modern</span> Web Development
          </p>
          <p className="big-paragraph">
            Website Design, Website Managament, Search Engine Optimization.
          </p>
          <div className="social-icons">
            <Instagram className="social-icon" size={25} />
            <Twitter className="social-icon" size={25} />
            <Facebook className="social-icon" size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Top;
