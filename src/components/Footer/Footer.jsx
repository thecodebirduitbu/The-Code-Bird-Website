import React from "react";
import Logo from "../images/logo.png";
import "./footer.css";

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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
            sapiente! Esse in iure deleniti repellendus magni vero assumenda
          </p>
        </div>
        <div className="col">
          <h3>
            Office{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <p>Golapbag Road</p>
          <p>Golapbag, Burdwan</p>
          <p>Golapbag, PIN 777777, India</p>
          <p className="email-id">codebird@gmail.com</p>
          <h4>+91-0123456789</h4>
        </div>

        <div className="col">
          <h3>
            Links{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Advisor</a>
            </li>
            <li>
              <a href="/">Events</a>
            </li>
            <li>
              <a href="/">FaQs</a>
            </li>
            <li>
              <a href="/">Register</a>
            </li>
          </ul>
        </div>
        <div className="col">
          <h3>
            Contact us{" "}
            <div className="underline">
              <span></span>
            </div>
          </h3>
          <form>
            <i className="far "><FaEnvelope/></i>
            <input
              type="email"
              placeholder="Enter your email id"
              required
            ></input>
            <button type="submit">
              <i className="fas "><FaArrowRight/></i>
            </button>
          </form>
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
