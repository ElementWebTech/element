import React from "react";
import wolf from "./assets/images/wolf.svg";
import { Envelope, Telephone } from "react-bootstrap-icons";

const Nav = ({ scrollPos }) => {
  return (
    <div
      className={`nav-container ${scrollPos > 0 ? "nav-container-active" : ""}`}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src={wolf} alt="wolf logo" style={{ height: 50 }} />
        <p className="logo-text">Element</p>
      </div>
      <div className="nav-links">
        <a href="tel:9373218714" className="contact-link">
          <Telephone />
          <span className="phone-number">(937)-321-8714</span>
        </a>
        <a href="mailto:rmthomas@elementwebtech.io" className="contact-link">
          <Envelope />
          <span className="email">ryanmthomas01@gmail.com</span>
        </a>
      </div>
    </div>
  );
};

export default Nav;
