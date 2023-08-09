import React from "react";
import {
  TbBrandJavascript,
  TbCopyrightFilled,
  TbBrandPython,
} from "react-icons/tb";
function MLandAI() {
  return (
    <div className="py-[10rem] mx-10 md:mx-[2rem] text-white">
      <h1 className="text-[2rem] text-white text-center">
        Artificial Intelligence / Machine Learning:
      </h1>
      <p className="text-lg mb-6 pt-16 text-justify">
        Enter the realm of Artificial Intelligence and Machine Learning! In this
        cutting-edge domain, you'll delve into the world of intelligent systems,
        data analysis, and pattern recognition. Discover how AI and ML
        technologies drive innovation across industries, from self-driving cars
        to personalized recommendations. Unravel the mysteries of algorithms and
        unlock the potential of machine learning to shape a smarter future.
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

export default MLandAI;
