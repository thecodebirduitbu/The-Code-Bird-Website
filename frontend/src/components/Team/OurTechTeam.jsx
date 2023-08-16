import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "./OurTechTeam.css";

function OurTechTeam({ teamMembers }) {
  return (
    <div className="mx-auto">
      <div className=" cardouterlayer ">
        {teamMembers.map((item, index) => {
          return (
            <div key={index} className="cardContainer">
              <div className="profileDiv">
                <img src={`/devimg/${item.image}`} alt="img" />
              </div>
              <div className="infoDiv">
                <div className="nameDiv">
                  <p className="name">{item.name}</p>
                  <p className="text-md text-center">{item.batch}</p>
                  <p className="role">{item.position}</p>
                </div>
                <div className="socialDiv">
                  {item.github && (
                    <a href={item.github}>
                      <FaGithub className="text-2xl text-gray-600" />
                    </a>
                  )}
                  {item.linkedin && (
                    <a href={item.linkedin}>
                      <FaLinkedin className="text-2xl text-gray-600" />
                    </a>
                  )}
                  {item.twitter && (
                    <a href={item.twitter}>
                      <FaTwitter className="text-2xl text-gray-600" />
                    </a>
                  )}
                  {item.instagram && (
                    <a href={item.instagram}>
                      <FaInstagram className="text-2xl text-gray-600" />
                    </a>
                  )}
                  {item.facebook && (
                    <a href={item.facebook}>
                      <FaFacebook className="text-2xl text-gray-600" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OurTechTeam;
