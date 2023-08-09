import React from "react";
import { SiUnrealengine, SiCplusplus, SiCsharp } from "react-icons/si";
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
          <SiUnrealengine className="inline-block mr-2 text-blue-500" />
          Unreal Engine: Unreal Engine is the world's most advanced real-time 3D
          game development tool for hyper-realistic visuals and immersive
          experiences. Its developed by the GameDev Giant, Epic Games. Heres few
          games that developed using Unreal Engine- Fortnite, GTA 6, PUBG, Final
          Fantasy 7, Valorant etc.
        </li>
        <li>
          <SiCplusplus className="inline-block mr-2 text-blue-500" />
          C++: Game developers have been building games with C++ for decades.
          C++ allows you to develop games across various platforms, including
          Windows, Mac, Linux, Android, and iOS.C++ is used in numerous 2D game
          engines and 3D game engines. Unreal Engine, Godot for instance, use
          C++ as their scripting language. The Unity game engine is written in
          C#, but its runtime language is C++. By now, many gaming APIs are
          written in C++. So it’s great for game development, its the first
          choice of Game Devs.
        </li>
        <li>
          <SiCsharp className="inline-block mr-2 text-blue-500" />
          C# : C# can also be used to build custom tools for game development,
          such as level editors or asset management systems. These tools can
          help streamline the game development process and improve the
          efficiency of the development team. In addition to game engines and
          tools, C# can also be used for game scripts.
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
