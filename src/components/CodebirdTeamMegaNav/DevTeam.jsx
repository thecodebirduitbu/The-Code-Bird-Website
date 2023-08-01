import React from "react";
import OurTechTeam from "../Team/OurTechTeam";
import "../Team/OurTechTeam.css";
const teamMembersData = [
  {
    name: "John Doe",
    position: "Software Engineer",
    imgUrl: "john-doe-img-url.jpg",
    github: "https://github.com/johndoe",
    linkedin: "https://linkedin.com/in/johndoe",
    // No Instagram or Facebook links for John Doe
  },
  {
    name: "Jane Smith",
    position: "Web Developer",
    imgUrl: "jane-smith-img-url.jpg",
    github: "https://github.com/janesmith",
    linkedin: "https://linkedin.com/in/janesmith",
    instagram: "https://instagram.com/janesmith",
    facebook: "https://facebook.com/janesmith",
  },
  // Add more team members as needed
];

// In your parent component

function DevTeam() {
  return (
    <div className="py-[10rem]">
      <h1 className="text-[3rem] text-center text-white">
        Developers of <span className="thisWev">this Website</span>
      </h1>
      <div className="pt-10">
        <OurTechTeam teamMembers={teamMembersData} />
      </div>
    </div>
  );
}

export default DevTeam;
