import React from "react";
import { SiProbot } from "react-icons/si";
function RobotsHardware() {
  return (
    <div className="py-[10rem] mx-10 md:mx-[2rem] text-white">
      <h1 className="text-[2rem] text-white text-center">Hardware/Robotics</h1>
      <p className="text-lg mb-6 pt-16 text-justify">
        Welcome to the Hardware/Robotics domain! Here, you'll dive into the
        exciting world of physical computing, electronics, and robotics. Explore
        the fascinating interplay of hardware and software as you design, build,
        and program your own robots. From autonomous vehicles to home automation
        projects, this domain opens the door to innovation and hands-on
        learning. Join us as we embark on a journey of exploration and create
        intelligent machines that interact with the real world.
      </p>

      <h3 className="text-xl font-semibold mb-2">Tech Stacks</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <SiProbot className="inline-block mr-2 text-blue-500" />
          There are eight attributes for a robotics software stack that let you
          build robots rapidly and reliably:
          <br />
          1.Compatible with ROS / Robot Operating System
          <br />
          2.Supports rapid control prototyping and “hardware-in-the-loop”
          testing capabilities
          <br /> 3.Real-time capable
          <br /> 4.Easily certified
          <br /> 5.Contains a hypervisor
          <br /> 6.Manages cybersecurity
          <br />
          7.Consistent platform
          <br />
          8.Pre-packaged distribution
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

export default RobotsHardware;
