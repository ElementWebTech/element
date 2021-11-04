import React from "react";
import { ArrowRight } from "react-bootstrap-icons";

const Contact = () => {
  return (
    <div className="wrapper">
      <div className="contact-container">
        <p className="contact-sub-title">
          <span style={{ paddingRight: 10 }}>Contact</span>
          <ArrowRight size={15} />
        </p>
        <form>
          <div className="name-input-container">
            <div className="input-container fname-input">
              <label>First Name</label>
              <input type="text" name="fname" />
              <p className="error-message">error</p>
            </div>
            <div className="input-container">
              <label>Last Name</label>
              <input type="text" name="lname" />
              <p className="error-message">error</p>
            </div>
          </div>
          <div className="input-container">
            <label>Phone</label>
            <input type="tel" name="phone" />
            <p className="error-message">error</p>
          </div>
          <div className="input-container">
            <label>Email</label>
            <input type="email" name="email" />
            <p className="error-message">error</p>
          </div>
          <div className="input-container">
            <label>Message</label>
            <textarea name="email" />
            <p className="error-message">error</p>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
