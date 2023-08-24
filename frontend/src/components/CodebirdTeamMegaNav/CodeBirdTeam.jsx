import React, { useState, useEffect } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaGithub,
} from "react-icons/fa";
import axios from "axios";

function CodeBirdTeam() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://the-codebird-sever.vercel.app/api/allcoremembers`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="py-[8rem]">
      <h2 className="text-[3rem] text-center text-white pb-[2rem]">
        Our <span className="text-purple-600">Core Team</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 x4:grid-cols-4 gap-8 mx-10">
        {data.map((item, index) => (
          <div
            className="outline outline-white rounded-lg w-[20rem] h-fit text-center"
            key={index}
          >
            <div className="w-full h-65 bg-white rounded-t-lg overflow-hidden flex items-center justify-center">
              <img
                src={item.pimg} 
                alt={`${item.name}'s photo`}
                className="w-full h-full"
              />
            </div>
            <div className="p-5">
              <h4 className="text-white font-semibold text-xl  mb-2">
                {item.name}
              </h4>
              <p className="text-white font-semibold text-xl  mb-2">
                {item.clubPosition}
              </p>

              <div className="flex items-center justify-between mt-3 px-6 text-xl ">
                <a
                  href={item.linkedin}
                  className="text-white    hover:text-black    "
                >
                  <FaGithub />
                </a>

                <a
                  href={item.linkedin}
                  className="text-white    hover:text-sky-500    "
                >
                  <FaLinkedin />
                </a>
                <a
                  href={item.twitter}
                  className="text-white    hover:text-blue-400    "
                >
                  <FaTwitter />
                </a>
                <a
                  href={item.facebook}
                  className="text-white    hover:text-blue-800    "
                >
                  <FaFacebook />
                </a>
                <a href="#" className="text-white    hover:text-pink-600    ">
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
