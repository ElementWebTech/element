import React from "react";
import wolf from "./assets/images/wolf.svg";

const Nav = () => {
  return (
    <div className="nav-container">
      <img src={wolf} alt="wolf logo" style={{ height: 50 }} />
      <p className="logo-text">Element</p>
    </div>
  );
};

export default Nav;
