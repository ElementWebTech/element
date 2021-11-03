import React from "react";
import { ArrowRight } from "react-bootstrap-icons";
import customers from "./assets/images/customers.svg";
import sales from "./assets/images/sales.svg";
import { Transition, animated } from "react-spring";

const Benefits = () => {
  return (
    <div className="wrapper">
      <div className="benefits-container">
        <div className="benefit-flex-container">
          <div className="benefit-about">
            <p className="benefit-sub-title">
              <span style={{ paddingRight: 10 }}>Reach</span>
              <ArrowRight size={15} />
            </p>
            <p className="benefit-title">More potential customers</p>
            <p className="benefit-paragraph">
              A website can connect you to anyone that has internet access, all
              over the country and beyond.
            </p>
          </div>
          <div className="benefit-img-container">
            <img src={customers} alt="customers" className="benefit-img" />
          </div>
        </div>
        <p className="benefit-sub-title">
          <span style={{ paddingRight: 10 }}>Statistical Data</span>
          <ArrowRight size={15} />
        </p>
        <div className="stat-data-container">
          <div className="stat-container">
            <p className="stat-number">38%</p>
            <p className="stat">
              of people will stop interacting with a poorly designed site
            </p>
          </div>
          <div className="stat-container">
            <p className="stat-number">50%+</p>
            <p className="stat">of ecommerce revenue is generated on mobile</p>
          </div>
          <div className="stat-container">
            <p className="stat-number">57%</p>
            <p className="stat">
              of users won't recommend a business with a poorly designed website
              on mobile
            </p>
          </div>
          <div className="stat-container">
            <p className="stat-number">75%</p>
            <p className="stat">
              of consumers admit to making judgements on a company's credibility
              based on the company's website design
            </p>
          </div>
        </div>
        <div className="benefit-flex-container">
          <div className="benefit-about">
            <p className="benefit-sub-title">
              <span style={{ paddingRight: 10 }}>Sales</span>
              <ArrowRight size={15} />
            </p>
            <p className="benefit-title">Increase Sales</p>
            <p className="benefit-paragraph">
              Having a website doesn’t just help you increase online sales, it
              creates more sales offline as well.
            </p>
          </div>
          <div className="benefit-img-container">
            <img src={sales} alt="sales" className="benefit-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
