import React from "react";
import { SiSolidity, SiEthereum } from "react-icons/si";
import { HiWallet } from "react-icons/hi";
function Web3() {
  return (
    <div className="py-[10rem] mx-10 md:mx-[2rem] text-white">
      <h1 className="text-[2rem] text-white text-center">Web3 / Blockchain</h1>
      <p className="text-lg mb-6 pt-16 text-justify">
        Welcome to the decentralized future of Web3 and Blockchain technology!
        In this domain, you'll delve into the world of cryptocurrencies, smart
        contracts, and decentralized applications (DApps). Discover how
        blockchain is revolutionizing industries such as finance, gaming, and
        supply chain management. Explore the limitless potential of this
        groundbreaking technology and become a part of the decentralized
        revolution.
      </p>

      <h3 className="text-xl font-semibold mb-2">Tech Stacks</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <SiEthereum className="inline-block mr-2 text-blue-500" />
        </li>
        <li>
          <HiWallet className="inline-block mr-2 text-blue-500" />
        </li>
        <li>
          <SiSolidity className="inline-block mr-2 text-blue-500" />
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

export default Web3;
