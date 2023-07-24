import React from "react";
import { SiSolidity, SiEthereum } from "react-icons/si";
import { HiWallet } from "react-icons/hi2";
function Web3() {
  return (
    <div className="py-[10rem] mx-10 md:mx-[2rem] text-white">
      <h1 className="text-[2rem] text-white text-center">Web3 / Blockchain</h1>
      <p className="text-lg mb-6 pt-16 text-justify">
        Welcome to the decentralized future of Web3 and Blockchain technology!
        In this domain, you'll delve into the world of cryptocurrencies, smart
        contracts, and decentralized websites/applications. Discover how
        blockchain is revolutionizing industries & Explore the limitless
        potential of this groundbreaking technology and become a part of the
        decentralized revolution.
      </p>

      <h3 className="text-xl font-semibold mb-2">Tech Stacks</h3>
      <ul className="list-disc pl-6 mb-6">
        <li>
          <SiEthereum className="inline-block mr-2 text-blue-500" />
          Ethereum is a decentralized blockchain platform, running on a
          peer-to-peer network. It leverages its native cryptocurrency known as
          Ether/ETH to enable secure and verified transactions. By using
          Ethereum, developers gain the ability to construct and launch
          decentralized applications, eliminating the reliance on a central
          authority. In a decentralized application the participants/users of
          the app themselves become the decision-making authority.
        </li>
        <li>
          <HiWallet className="inline-block mr-2 text-blue-500" />
          MetaMask is a cryptocurrency wallet used to interact with the Ethereum
          blockchain. It allows users to access their Ethereum wallet through a
          browser extension or mobile app, which can then be used to interact
          with decentralized applications.
        </li>
        <li>
          <SiSolidity className="inline-block mr-2 text-blue-500" />
          Solidity is a programming language created by the Ethereum Network
          Team for constructing and designing smart contracts on Blockchain
          platforms. It's used to create smart contracts that implement business
          logic and generate a chain of transaction records in the blockchain
          system.
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
