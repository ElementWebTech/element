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
        <div className="contact-flex-container">
          <div className="contact-method-container">
            <p className="contact-title" style={{ paddingBottom: 15 }}>
              Phone
            </p>
            <p className="contact-paragraph" style={{ paddingBottom: 15 }}>
              Call us at our only number below. You won't experience any hold
              times or queues when you call us.
            </p>
            <p className="contact-paragraph" style={{ paddingBottom: 15 }}>
              <Telephone style={{ position: "relative", top: 2 }} />{" "}
              <span style={{ paddingLeft: 10 }}>937-321-8714</span>
            </p>
            <p className="contact-paragraph">
              <Clock style={{ position: "relative", top: 2 }} />{" "}
              <span style={{ paddingLeft: 10 }}>Everyday 8AM - 6PM</span>
            </p>

            <a href="tel:9373218714" className="contact-btn hollow-btn">
              Call now
            </a>
          </div>
          <div className="contact-method-container">
            <p className="contact-title" style={{ paddingBottom: 15 }}>
              Email
            </p>
            <p className="contact-paragraph" style={{ paddingBottom: 15 }}>
              We will see your email right away. You won't have to worry about
              it getting lost in our mailbox. Most of the time we will reply to
              your email the same day it is received.
            </p>
            <p className="contact-paragraph">
              <Envelope style={{ position: "relative", top: 3 }} />{" "}
              <span style={{ paddingLeft: 10 }} className="contact-email">
                rmthomas@elementwebtech.io
              </span>
            </p>
            <a
              href="mailto:rmthomas@elementwebtech.io"
              className="contact-btn hollow-btn"
            >
              Email now
            </a>
          </div>
          <div className="contact-method-container">
            <p className="contact-title" style={{ paddingBottom: 15 }}>
              Live Chat
            </p>
            <p className="contact-paragraph" style={{ paddingBottom: 15 }}>
              Need immediate answers to your questions?
            </p>
            <p className="contact-paragraph">
              Our live chat feature is perfect for quick responses from our
              team. The live chat is located at the bottom right part of the
              screen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
