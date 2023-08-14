import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const membersData = [
  {
    name: "Developer 1",
    role: "Software Engineer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    socialLinks: [
      { href: "#", icon: FaGithub },
      { href: "#", icon: FaTwitter },
      { href: "#", icon: FaLinkedin },
      { href: "#", icon: FaInstagram },
    ],
  },
  {
    name: "Developer 2",
    role: "Software Engineer",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    socialLinks: [
      { href: "#", icon: FaGithub },
      { href: "#", icon: FaTwitter },
      { href: "#", icon: FaLinkedin },
      { href: "#", icon: FaInstagram },
    ],
  },
  // Add more members here
];

function SocialIcon({ href, icon: Icon }) {
  return (
    <a href={href} className="text-gray-500 hover:text-gray-600">
      <Icon size={24} />
    </a>
  );
}

function MemberCard({ name, role, bio, socialLinks }) {
  return (
    <div className="w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row mb-4">
      <div className="w-full md:w-2/5 h-80">
        <img
          className="object-center object-cover w-full h-full"
          src="/demo.png"
          alt="photo"
        />
      </div>
      <div className="w-full md:w-3/5 text-left p-6 md:p-4 space-y-2">
        <p className="text-xl text-white font-bold">{name}</p>
        <p className="text-base text-gray-400 font-normal">{role}</p>
        <p className="text-base leading-relaxed text-gray-500 font-normal">
          {bio}
        </p>
        <div className="flex justify-between mx-6">
          {socialLinks.map((link, index) => (
            <SocialIcon key={index} href={link.href} icon={link.icon} />
          ))}
        </div>
      </div>
    </div>
  );
}

function MemberList({ members }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto">
      {members.map((member, index) => (
        <MemberCard key={index} {...member} />
      ))}
    </div>
  );
}

export default function Founders() {
  return (
    <div className="py-[10rem] mx-6">
      <h1 className="text-[3rem] text-white text-center pb-10 ">
        Our Founders
      </h1>

      <MemberList members={membersData} />
    </div>
  );
}
