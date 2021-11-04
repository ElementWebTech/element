import React from "react";
import { ArrowRight, Envelope, Clock, Telephone } from "react-bootstrap-icons";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="contact-container">
        <p className="contact-sub-title">
          <span style={{ paddingRight: 10 }}>Contact</span>
          <ArrowRight size={15} />
        </p>
      </div>
    </div>
  );
};

export default Contact;
