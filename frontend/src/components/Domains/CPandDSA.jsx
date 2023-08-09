import React from "react";
import {
  TbBrandJavascript,
  TbCopyrightFilled,
  TbBrandPython,
} from "react-icons/tb";
function CPandDSA() {
  return (
    <div className="py-[10rem] mx-10 md:mx-[2rem] text-white">
      <h1 className="text-[2rem] text-white text-center">
        Competitive Programming / Data Structures & Algorithms:
      </h1>
      <p className="text-lg mb-6 pt-16 text-justify">
        Unleash the power of problem-solving in the CP and DSA domain! Here,
        you'll enhance your coding skills and algorithmic thinking to tackle
        complex challenges. Master fundamental data structures and algorithms
        that form the backbone of software development. Participate in coding
        contests and push your limits to excel in the competitive programming
        arena. Join us as we delve deep into the realm of logic and code to
        unravel solutions to intricate problems.
      </p>

      <h3 className="text-xl font-semibold mb-2">Tech Stacks</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <TbCopyrightFilled className="inline-block mr-2 text-blue-500" />
        </li>
        <li>
          <TbBrandPython className="inline-block mr-2 text-blue-500" />
        </li>
        <li>
          <TbBrandJavascript className="inline-block mr-2 text-blue-500" />
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

export default CPandDSA;
