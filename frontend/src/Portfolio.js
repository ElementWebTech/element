import React from "react";
import { ArrowRight } from "react-bootstrap-icons";
import computer from "./assets/images/portfolio-computer.svg";

const Portfolio = () => {
  return (
    <div className="wrapper">
      <div className="portfolio-container">
        <p className="portfolio-sub-title">
          <span style={{ paddingRight: 10 }}>Portfolio</span>
          <ArrowRight size={15} />
        </p>
        <div className="portfolio-flex-container">
          <div className="img-portfolio-container">
            <p className="portfolio-title">Clovers Mini Golden Doodles</p>
            <p className="portfolio-title-description">
              Mini Golden Doodles for sale in Ohio. Clover had her first litter
              on October 28th, puppies will be ready to take home on the 23rd of
              December, making them perfect for a Christmas puppy.
            </p>
          </div>
          <div className="portfolio-about-project-container">
            <img src={computer} alt="computer" className="computer" />
            <p className="portfolio-about-title">Clovers Mini Golden Doodles</p>
            <p className="project-description">
              This site was made to show info about the clients dogs & puppies
              so they could be sold.
            </p>
            <div className="btn-container">
              <a
                href="https://www.cloversminigoldendoodles.com"
                target="_blank"
                rel="noreferrer"
                className="hollow-btn"
              >
                View Site
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
