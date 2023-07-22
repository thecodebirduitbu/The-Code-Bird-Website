import React from "react";
import Timeline from "./Timeline";

const eventsData = [
  {
    date: "23rd August, 2016",
    description:
      "The Code Bird founded under the guidance of Professor Sumit Gupta.",
    image: "demoimg.png",
  },
  {
    date: "September, 2016",
    description: "First coding contest organized: CodeWiz.",
    image: "demoimg.png",
  },
  {
    date: "Meow, 2016",
    description: "Meow, meow , meow",
    image: "demoimg.png",
  },
  //  more events here
];

function TimelineStory() {
  return (
    <div className=" text-center text-white">
      <h1 className="text-semibold mb-4">Its Story Time</h1>
      <Timeline events={eventsData} />
    </div>
  );
}

export default TimelineStory;
