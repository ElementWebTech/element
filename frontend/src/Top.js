import React, { useState } from "react";
import { Instagram, Twitter, Facebook } from "react-bootstrap-icons";
import star from "./assets/images/star.svg";
import { Spring, animated } from "react-spring";
import BezierEasing from "bezier-easing";

const Top = () => {
  const easing = BezierEasing(0.28, 1.11, 1, 1);

  return (
    <div className="top-container">
      <div className="top-contents-wrapper">
        <div className="top-contents">
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={2700}>
            {(styles) => (
              <animated.img
                src={star}
                style={styles}
                alt="star"
                className="star-front"
              />
            )}
          </Spring>
          <Spring
            config={{ duration: 1500, easing: easing }}
            from={{ opacity: 0, transform: "translateX(-500px)" }}
            delay={300}
            to={{ opacity: 1, transform: "translateX(0px)" }}
          >
            {(styles) => (
              <animated.p style={styles} className="header">
                <span className="header-bold">Modern</span> Web Development
              </animated.p>
            )}
          </Spring>
          <Spring
            config={{ duration: 1500, easing: easing }}
            delay={600}
            from={{ opacity: 0, transform: "translateX(-500px)" }}
            to={{ opacity: 1, transform: "translateX(0px)" }}
          >
            {(styles) => (
              <animated.p style={styles} className="big-paragraph">
                Website Design, Website Managament, Search Engine Optimization.
              </animated.p>
            )}
          </Spring>
          <div className="social-icons">
            <Spring
              config={{ duration: 500 }}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              delay={1600}
            >
              {(styles) => (
                <animated.a
                  className="social-icon"
                  href="https://www.instagram.com/elementwebtech"
                  target="_blank"
                  rel="noreferrer"
                  style={styles}
                >
                  <Instagram size={25} className="instagram"/>
                </animated.a>
              )}
            </Spring>
            <Spring
              config={{ duration: 500 }}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              delay={1800}
            >
              {(styles) => (
                <animated.a
                  className="social-icon"
                  href="https://www.twitter.com/elementwebtech"
                  target="_blank"
                  rel="noreferrer"
                  style={styles}
                >
                  <Twitter size={25} className="twitter"/>
                </animated.a>
              )}
            </Spring>
            <Spring
              config={{ duration: 500 }}
              from={{ opacity: 0 }}
              to={{ opacity: 1 }}
              delay={2000}
            >
              {(styles) => (
                <animated.a
                  className="social-icon"
                  href="https://www.facebook.com/elementwebtech"
                  target="_blank"
                  rel="noreferrer"
                  style={styles}
                >
                  <Facebook size={25} className="facebook"/>
                </animated.a>
              )}
            </Spring>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Top;
