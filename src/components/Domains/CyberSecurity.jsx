import React from "react";
import { SiGnubash } from "react-icons/si";
function CyberSecurity() {
  return (
    <div className="py-[10rem] mx-10 md:mx-[2rem] text-white">
      <h1 className="text-[2rem] text-white text-center">Cybersecurity</h1>
      <p className="text-lg mb-6 pt-16 text-justify">
        Step into the realm of Cybersecurity, where you'll become a digital
        defender. This domain equips you with the skills to protect information
        systems, networks, and data from cyber threats. Learn about ethical
        hacking, cryptography, and secure coding practices. Discover how to
        identify vulnerabilities and implement robust security measures. Become
        a guardian of the digital realm and play a crucial role in safeguarding
        the cyberspace.
      </p>

      <h3 className="text-xl font-semibold mb-2">Tech Stacks</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <SiGnubash className="inline-block mr-2 text-blue-500" />
          hi
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-2">Learning Resources</h3>
      <p className="mb-6">
        Here are some recommended resources to enhance your web development
        skills:
      </p>
      {/* list of learning resources here */}
      <h3 className="text-xl font-semibold mb-2">Events and Workshops</h3>
      <p className="mb-6">
        Join us in exciting web development events and workshops:
      </p>
      {/* list of events and workshops here */}

      <h3 className="text-xl font-semibold mb-2">Featured Projects</h3>
      <p className="mb-6">
        Check out some amazing projects created by our members:
      </p>
      {/* list of featured projects here */}
    </div>
  );
}

export default CyberSecurity;
