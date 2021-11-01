import React from 'react';
import {ArrowRight} from 'react-bootstrap-icons';

const Services = () => {
  return (
    <div className="wrapper">
    <div className="services-container">
    <p className="service-sub-title"><span style={{paddingRight: 10}}>Our Services</span><ArrowRight size={15}/></p>
    <div className="service-flex-container">
      <div className="service-main">
        <p className="service-title">Unbeatable Services</p>
        <p className="service-paragraph">Element offers sophisticated website tools and unparalleled support to our clients who want to capitalize on every opportunity. We are committed to the idea that a highly proactive and responsive support team can be the secret weapon to meeting all of your needs.</p>
      </div>
      <div className="service-sub-container">
        <div className="service-sub">
          <p className="service-sub-service-title">Website Design</p>
          <p className="service-sub-service-paragraph">When your audience visits your website, it gives them their first impression of your business. We aim to give your customers an experience they will love.</p>
        </div>
        <div className="service-sub">
          <p className="service-sub-service-title">Website Management</p>
          <p className="service-sub-service-paragraph"> Content management includes things like posting blog posts, adding photographs, and fixing website pages.</p>
        </div>
        <div className="service-sub">
          <p className="service-sub-service-title">Search Engine Optimization</p>
          <p className="service-sub-service-paragraph">Search engine optimization (SEO) is the art and science of getting pages to rank higher in search engines such as Google.</p>
        </div>

      </div>
    </div>
    </div>
    </div>
  )
}

export default Services;