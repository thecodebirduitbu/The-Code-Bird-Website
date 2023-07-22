import React from "react";
import Timeline from "./Timeline";

const eventsData = [
  {
    date: "23rd August, 2016",
    description:
      "The Code Bird founded under the guidance of Professor Sumit Gupta.",
    image: "event1.jpg",
  },
  {
    date: "September, 2016",
    description: "First coding contest organized: CodeWiz.",
    image: "event2.jpg",
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
