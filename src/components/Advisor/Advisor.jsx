import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

function Advisor() {
  return (
    <div className="py-[10rem]">
      <h1 className="text-[3rem] text-white text-center">Our Advisor</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-[3rem] mx-10">
        <div className="mx-auto my-auto rounded-full p-4 ">
          <img
            src="/Images/demoimg.png"
            alt="Image of Advisor"
            sizes="fill"
            width={300}
            height={300}
          />
        </div>
        <div className="mx-auto">
          <h1 className="text-justify mx-auto text-lg">
            Meet Mr. Sumit Gupta, an exceptional Assistant Professor in the
            Department of Computer Science & Engineering at UIT BU. As the
            guiding force behind "The Code Bird" coding club since its
            inception, Professor Gupta has been instrumental in nurturing
            excellence among coders at UIT. Under his mentorship, The Code Bird
            has reached remarkable milestones and organized prestigious events
            like CodeWiz, Snackdown, CIS Hackathon, and more, enabling UITians
            to participate and shine on global stages like ACM ICPC, Snackdown,
            and Bengalathon. Thanks to Professor Gupta's leadership, The Code
            Bird team aims to expand its horizons, exploring new opportunities
            and organizing diverse technical events for all students at UIT. We
            are forever grateful for his contributions in fostering a thriving
            Coding Culture at our institution and eagerly anticipate achieving
            many more milestones under his esteemed guidance.
          </h1>
          <div class="social-icons pt-8">
            <i className="fa">
              <FaLinkedin />
            </i>
            <i className="fa">
              <FaFacebook />
            </i>
            <i className="fa">
              <FaWhatsapp />
            </i>
            <i className="fa">
              <FaDiscord />
            </i>
            <i className="fa">
              <FaInstagram />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advisor;
