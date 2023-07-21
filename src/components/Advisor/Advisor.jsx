import React from "react";

function Advisor() {
  return (
    <div className="pt-[8rem]">
      <h1 className="text-[2rem] text-center">Our Advisor</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-[2rem] ">
        <div className="mx-auto">
          <h1 className="text-justify mx-auto text-md">
            &#60; "The Code Bird" is the biggest coding club of UIT, where
            budding tech enthusiasts flock together to spread their wings and
            explore the fascinating world of programming. With engaging
            workshops, collaborative projects, and a supportive community, we
            nurture creativity, problem-solving, and a passion for coding. Join
            us and soar to new coding heights! &#47; &#62;
          </h1>
        </div>

        <div className="mx-auto rounded-full w-100 h-100 ">
          <img
            src="/Images/demoimg.png"
            alt="Image of Advisor"
            sizes="fill"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </div>
  );
}

export default Advisor;
