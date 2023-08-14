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
      <h2 className="text-white">
        Our <span className="text-blue-500">Core Team</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((item, index) => (
          <div className="bg-gray-900 rounded-lg w-1/4" key={index}>
            <div className="w-full h-40 bg-white rounded-t-lg overflow-hidden flex items-center justify-center">
              <img
                src={item.imgUrl}
                alt=""
                className="w-3/4 h-auto transform scale-125"
              />
            </div>
            <div className="p-5">
              <h4 className="text-white font-semibold text-lg mb-2">
                {item.name}
              </h4>
              <p className="text-gray-400">{item.position}</p>

              <div className="flex items-center justify-center mt-3 space-x-2">
                <a
                  href={item.social.github}
                  className="text-white text-lg hover:bg-gray-700 p-1 rounded-full"
                >
                  <FaGithub />
                </a>
                <a
                  href={item.social.linkedin}
                  className="text-white text-lg hover:bg-blue-500 p-1 rounded-full"
                >
                  <FaLinkedin />
                </a>
                <a
                  href={item.social.twitter}
                  className="text-white text-lg hover:bg-blue-400 p-1 rounded-full"
                >
                  <FaTwitter />
                </a>
                <a
                  href={item.social.facebook}
                  className="text-white text-lg hover:bg-blue-800 p-1 rounded-full"
                >
                  <FaFacebook />
                </a>
                <a
                  href={item.social.instagram}
                  className="text-white text-lg hover:bg-pink-600 p-1 rounded-full"
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
