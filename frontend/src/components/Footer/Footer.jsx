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
// import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer>
      <div className="row">
        <div className="col">
          <img src={Logo} className="logo1"></img>
          <p>
          Every student of UIT, irrespective of their stream or year can make great things, CODEBIRD helps you to achieve that, for FREE !! 😀🏆 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi, explicabo, aliquam beatae nostrum fuga libero eos odio molestiae nulla minima ipsa maxime maiores assumenda aliquid?
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
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/ourstory">About</a>
            </li>
            <li>
              <a href="/advisor">Advisor</a>
            </li>
            <li>
              <a href="/event">Events</a>
            </li>
            <li>
              <a href="/faQs">FaQs</a>
            </li>
            <li>
              <a href="/login">Register</a>
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
          <i className="fa"><FaLinkedin/></i>
          <i className="fa"><FaFacebook/></i>
          <i className="fa"><FaWhatsapp/></i>
          <i className="fa"><FaDiscord/></i>
          <i className="fa"><FaInstagram/></i>
          
            
          </div>
        </div>
      </div>
      <hr />
      <p className="copyright"> CodeBird © 2023 - All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
