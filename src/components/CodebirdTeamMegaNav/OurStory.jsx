import React from "react";
import TimelineStory from "./TimelineStory";
function OurStory() {
  return (
    <div className="py-[10rem]">
      <h1 className="text-[3rem] text-white text-center ">Our Story</h1>
      <p className="text-justify text-lg text-white pt-10 mx-10 md:mx-[2rem]">
        Welcome to The Code Bird, also known as "Code Bird," the heart of coding
        culture at the University Institute of Technology Burdwan (UIT, BU).
        Founded on 23rd August 2016 under the esteemed guidance of Professor
        Sumit Gupta, our club has since blossomed into a thriving community of
        talented coders at UIT, BU. We provide an engaging platform for students
        to excel in coding and create a supportive space for collaboration and
        innovation. Our mission is to empower UITians with the best coding
        skills, offering regular coding contests, hackathons, workshops, and
        tech talks. We believe in the power of teamwork and encourage
        knowledge-sharing and mentorship within our close-knit community. No
        matter your coding experience, The Code Bird welcomes all who are eager
        to learn and make a positive impact in the ever-evolving world of
        technology. Join us on this exhilarating journey, where we celebrate the
        joy of coding and the thrill of pushing boundaries. Together, we'll soar
        to new heights!
      </p>
      <div className="pt-16">
        <TimelineStory />
      </div>
    </div>
  );
}

export default OurStory;
