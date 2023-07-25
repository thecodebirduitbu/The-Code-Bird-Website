import React from "react";
import { TbBrandFlutter, TbBrandKotlin, TbJetpack } from "react-icons/tb";
function GameDev() {
  return (
    <div className="py-[10rem] mx-10 md:mx-[2rem] text-white">
      <h1 className="text-[2rem] text-white text-center">Game Development</h1>
      <p className="text-lg mb-6 pt-16 text-justify">
        Step into the realm of Game Development, where creativity and technology
        converge to create captivating virtual worlds. In this domain, you'll
        learn the art of designing gameplay, creating stunning graphics, and
        programming game mechanics. Unleash your imagination as you bring your
        game ideas to life and immerse players in unforgettable gaming
        experiences. Join us on this thrilling adventure and become a game
        changer in the world of interactive entertainment.
      </p>

      <h3 className="text-xl font-semibold mb-2">Tech Stacks</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <TbBrandKotlin className="inline-block mr-2 text-blue-500" />
          Unreal Engine: Unreal Engine is the world's most advanced real-time 3D
          game development tool for hyper-realistic visuals and immersive
          experiences. Its developed by the GameDev Giant, Epic Games. Heres few
          games that developed using Unreal Engine-
        </li>
        <li>
          <TbBrandFlutter className="inline-block mr-2 text-blue-500" />
          xyz
        </li>
        <li>
          <TbJetpack className="inline-block mr-2 text-blue-500" />
          xyz
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

export default GameDev;
