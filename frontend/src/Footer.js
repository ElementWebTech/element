import React from 'react'
import { Instagram, Facebook, Twitter } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="copyright">&#169; 2021 Element</p>
      <div className="footer-social-icons-container">
        <Instagram size={18} className="footer-social-icon"/>
        <Twitter size={18} className="footer-social-icon"/>
        <Facebook size={18} className="footer-social-icon"/>
      </div>
    </div>
  )
}

export default Footer;