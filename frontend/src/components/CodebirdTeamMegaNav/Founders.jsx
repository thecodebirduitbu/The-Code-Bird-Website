import React from "react";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const membersData = [
  // ... (your member data)
];

function SocialIcon({ href, icon: Icon, color }) {
  return (
    <a href={href} className={`text-${color} hover:text-gray-600`}>
      <Icon size={24} />
    </a>
  );
}

function MemberCard({ name, role, bio, socialLinks }) {
  return (
    <div className="w-full bg-gray-900 rounded-lg shadow-lg overflow-hidden flex flex-col md:flex-row mb-4">
      {/* ... (rest of your component) */}
      <div className="flex justify-between mx-6">
        {socialLinks.map((link, index) => (
          <SocialIcon
            key={index}
            href={link.href}
            icon={link.icon}
            color={link.color}
          />
        ))}
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
