import React from 'react'
import { Instagram, Facebook, Twitter } from 'react-bootstrap-icons';

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="copyright">&#169; 2021 Element</p>
      <div className="footer-social-icons-container" style={{paddingLeft: 20}}>
        <a href="https://www.instagram.com/elementwebtech" target="_blank" rel="noreferrer" style={{color: '#fff', display: 'flex', alignItems: 'center'}}><Instagram size={18} className="footer-social-icon instagram"/></a>
        <a href="https://www.twitter.com/elementwebtech" target="_blank" rel="noreferrer" style={{color: '#fff', display: 'flex', alignItems: 'center'}}><Twitter size={18} className="footer-social-icon twitter"/></a>
        <a style={{color: '#fff', display: 'flex', alignItems: 'center'}} href="https://www.facebook.com/elementwebtech" target="_blank" rel="noreferrer"><Facebook size={18} className="footer-social-icon facebook"/></a>
      </div>
    </div>
  )
}

export default Footer;