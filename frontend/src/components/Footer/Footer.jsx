import React from "react";
import Logo from "../images/logo.png";
import "./footer.css"

import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <img src={Logo} className="logo1"></img>
          <p>
          Every student of UIT, irrespective of their stream or year can make great things, CODEBIRD helps you to achieve that, for FREE !! 😀🏆 Join us in this journey of discovery and creativity. Unleash your potential, At CODEBIRD, we're not just building events;Your journey starts here – let's code, collaborate, and create together!"






          </p>
        </div>
        <div className="col">
          <h3>Office<div className="underline2"><span></span></div></h3>
          <p>UIT Campus, Burdwan</p>
          <p>West Bengal, PIN 713104, India</p>
          <p className="email-id">thecodebird.uitbu@gmail.com</p>
          <h4>1800 111 363</h4>
        </div>

        <div className="col">
          <h3>Links<div className="underline2"><span></span></div></h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/ourstory">About</Link>
            </li>
            <li>
              <Link to="/advisor">Advisor</Link>
            </li>
            <li>
              <Link to="/event">Events</Link>
            </li>
            <li>
              <Link to="/faQs">FaQs</Link>
            </li>
            <li>
              <Link to="/login">Register</Link>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>Contact us<div className="underline2"><span></span></div></h3>
          <div className="form2">
            <i className="far "><FaEnvelope/></i>
            <input
              type="email"
              placeholder="Enter your email id"
              required
            ></input>
            <button type="submit">
              <i className="fas "><FaArrowRight/></i>
            </button>
          </div>
          <div class="social-icons">
          <Link to="https://www.linkedin.com/company/thecodebird/mycompany/"><i className="fa"><FaLinkedin/></i></Link>
          <Link to="https://www.facebook.com/thecodebird"><i className="fa"><FaFacebook/></i></Link>
          <Link to=""><i className="fa"><FaWhatsapp/></i></Link>
          <Link to="https://discord.gg/QVP9efsY"><i className="fa"><FaDiscord/></i></Link>
          <Link to="https://www.instagram.com/thecodebird.exe/"><i className="fa"><FaInstagram/></i></Link>
          
            
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright"> CodeBird © 2023 - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
