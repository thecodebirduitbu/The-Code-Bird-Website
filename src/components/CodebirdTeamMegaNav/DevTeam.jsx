import React from "react";
import OurTechTeam from "../Team/OurTechTeam";
import "../Team/OurTechTeam.css";
const teamMembersData = [
  {
    name: "@ImKKingshuk",
    position: "Developer",
    image: "Kingshuk.jpeg",
    github: "https://github.com/ImKKingshuk",
    linkedin: "https://linkedin.com/in/",
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
  },
  {
    name: "Anuraj Kumar",
    position: "Developer",
    image: "Anuraj.jpeg",
    github: "https://github.com/link",
    linkedin: "https://linkedin.com/in/link",
    instagram: "https://instagram.com/link",
    facebook: "https://facebook.com/link",
  },
  {
    name: "Amrit Dhandharia",
    position: "Developer",
    image: "Amrit.jpeg",
    github: "https://github.com/link",
    linkedin: "https://linkedin.com/in/link",
    instagram: "https://instagram.com/link",
    facebook: "https://facebook.com/link",
  },
  {
    name: "Puskar Roy",
    position: "Developer",
    image: "Pushkar.jpeg",
    github: "https://github.com/link",
    linkedin: "https://linkedin.com/in/link",
    instagram: "https://instagram.com/link",
    facebook: "https://facebook.com/link",
  },
];

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
