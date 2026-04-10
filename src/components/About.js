// src/components/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Top banner image */}
      <section className="about-banner">
        <img src="../images/about.png" alt="About Banner" className="about-banner-img" />
      </section>

      {/* Title and body */}
      <section className="about-intro">
        <h1 className="about-title">About Powerhouse Ventures Corporation</h1>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur.
        </p>
        <p className="about-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum.
        </p>
      </section>

      {/* Mission and Vision */}
      <section className="mission-vision-section">
        <div className="mv-logo-box">
          <img src="../images/logo.png" alt="Company Logo" className="mv-logo" />
        </div>

        <div className="mv-content">
          <div className="mv-card">
            <h2 className="mv-title">Mission</h2>
            <p className="mv-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              feugiat, sapien nec suscipit gravida, justo erat tincidunt massa,
              at feugiat ligula nisi at odio.
            </p>
          </div>

          <div className="mv-card">
            <h2 className="mv-title">Vision</h2>
            <p className="mv-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              feugiat, sapien nec suscipit gravida, justo erat tincidunt massa,
              at feugiat ligula nisi at odio.
            </p>
          </div>
        </div>
      </section>

      {/* Business Partners */}
      <section className="partners-section">
        <h2 className="section-title">Business Partners</h2>
        <div className="partners-grid">
          <div className="partner-card">Partner 1</div>
          <div className="partner-card">Partner 2</div>
          <div className="partner-card">Partner 3</div>
          <div className="partner-card">Partner 4</div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonial-section">
        <h2 className="section-title">Testimonials</h2>
        <div className="video-wrapper">
          <iframe
            width="100%"
            height="450"
            src="https://www.youtube.com/embed/Zn1xyFZwDJ4"
            title="YouTube testimonial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default About;