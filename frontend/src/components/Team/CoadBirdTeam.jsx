import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
import "./CoadBirdTeam.css";

const teamMembers = [
  {
    name: "John Doe",
    position: "CEO",
    imgUrl: "john-doe.jpg",
    social: {
      linkedin: "https://www.linkedin.com/in/johndoe/",
      twitter: "https://twitter.com/johndoe/",
      facebook: "https://www.facebook.com/johndoe/",
      instagram: "https://www.instagram.com/johndoe/",
    },
  },
  // Add more team members
];

const CoadBirdTeam = () => {
  return (
    <div className="pt-14">
      <div className="our__team">
        <div className="container">
          <div className="team__content">
            <h2>
              Our <span className="highlight">Core Team</span>
            </h2>
          </div>
          <div className="team__wrapper">
            {teamMembers.map((item, index) => (
              <div className="team__item" key={index}>
                <div className="team__img">
                  <img src={item.imgUrl} alt="" />
                </div>
                <div className="team__details">
                  <h4>{item.name}</h4>
                  <p className="description">{item.position}</p>

                  <div className="team__member-social">
                    <a href={item.social.linkedin} className="linkedin">
                      <FaLinkedin />
                    </a>
                    <a href={item.social.twitter} className="twitter">
                      <FaTwitter />
                    </a>
                    <a href={item.social.facebook} className="facebook">
                      <FaFacebook />
                    </a>
                    <a href={item.social.instagram} className="instagram">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoadBirdTeam;
