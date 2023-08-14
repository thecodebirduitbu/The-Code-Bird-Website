import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "@ImKKingshuk",
    position: "Core Team Member",
    imgUrl: "kingshuk.png",
    social: {
      github: "https://github.com/ImKKingshuk",
      linkedin: "https://www.linkedin.com/in/imkkingshuk/",
      twitter: "https://twitter.com/imkkingshuk/",
      facebook: "https://www.facebook.com/imkkingshuk/",
      instagram: "https://www.instagram.com/imkkingshuk/",
    },
  },

  // Add more team members
];

function CodeBirdTeam() {
  return (
    <div className="py-[8rem]">
      <h2 className="text-[3rem] text-center text-white">
        Our <span className="text-blue-500">Core Team</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6 mx-auto">
        {teamMembers.map((item, index) => (
          <div
            className="outline outline-white rounded-lg w-[12rem] h-fit text-center"
            key={index}
          >
            <div className="w-full h-40 bg-white rounded-t-lg overflow-hidden flex items-center justify-center">
              <img
                src={item.imgUrl}
                alt={`${item.name}'s photo`}
                className="w-3/4 h-auto transform scale-125"
              />
            </div>
            <div className="p-5">
              <h4 className="text-white font-semibold text-xl  mb-2">
                {item.name}
              </h4>
              <p className="text-gray-400">{item.position}</p>

              <div className="flex items-center justify-between mt-3 px-6 text-xl ">
                <a
                  href={item.social.github}
                  className="text-white    hover:text-gray-700    "
                >
                  <FaGithub />
                </a>
                <a
                  href={item.social.linkedin}
                  className="text-white    hover:text-blue-500    "
                >
                  <FaLinkedin />
                </a>
                <a
                  href={item.social.twitter}
                  className="text-white    hover:text-blue-400    "
                >
                  <FaTwitter />
                </a>
                <a
                  href={item.social.facebook}
                  className="text-white    hover:text-blue-800    "
                >
                  <FaFacebook />
                </a>
                <a
                  href={item.social.instagram}
                  className="text-white    hover:text-pink-600    "
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CodeBirdTeam;
