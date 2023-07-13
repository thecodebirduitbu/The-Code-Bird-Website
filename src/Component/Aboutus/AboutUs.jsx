import React from 'react';
import './aboutUs.css';

const AboutUs = () => {
  return (
    <div className='body1'>
    <div className='section'>
      <div className="image">
        <img src="/src/assets/walk.gif" alt="Walking GIF" />
      </div>

      <div className="content">
        <div className="col">
          <h2>About Us</h2>
          <div className="underline">
            <span></span>
          </div>
        </div>
        <br />
        <div className="paragraph">
          <p>
            "Welcome to CODEBIRD, where innovation takes flight! We are a
            passionate college coding organization dedicated to empowering
            students, fostering collaboration, and soaring towards excellence in
            the world of programming."
          </p>
        </div>
        <ul className="links">
          <li>
            <a href="/">Our Aim</a>
          </li>
          <div className="vertical-line"></div>
          <li>
            <a href="/">Achievements</a>
          </li>
          <div className="vertical-line"></div>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
        <ul className="icons">
          <li>
            <i className="fa fa-twitter"></i>
          </li>
          <li>
            <i className="fa fa-facebook"></i>
          </li>
          <li>
            <i className="fa fa-github"></i>
          </li>
          <li>
            <i className="fa fa-envelope"></i>
          </li>
        </ul>
      </div>
      <br /><br />
      <div className="credit">&copy;<a href="#">CODEBIRD WEBSITE TEAM</a></div>
      </div>
    </div>
  );
};

export default AboutUs;
