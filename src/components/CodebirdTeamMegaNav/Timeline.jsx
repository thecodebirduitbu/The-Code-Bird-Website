import React from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function TimelineCard({ date, description, image, index }) {
  AOS.init();

  const cardAnimation = index % 2 === 0 ? "fade-right" : "fade-left";

  return (
    <motion.div
      className={`flex mx-auto mb-8 px-4 py-2 bg-white shadow-md rounded-2xl w-96 ${
        index % 2 === 0 ? "self-start" : "self-end"
      }`}
      data-aos={cardAnimation}
      data-aos-duration="800"
    >
      <div
        className={`w-4 h-4 bg-blue-500 rounded-full z-10 ${
          index % 2 === 0 ? "mr-4" : "ml-4"
        }`}
      ></div>
      <div>
        <p className="text-gray-800 font-semibold">{date}</p>
        <p className="text-gray-600">{description}</p>
      </div>
      <img
        src={`/eventimg/${image}`}
        alt={`Event ${index + 1}`}
        className={`ml-4 w-20 h-20 rounded-lg object-cover ${
          index % 2 === 0 ? "order-last" : "order-first"
        }`}
      />
    </motion.div>
  );
}

function Timeline({ events }) {
  return (
    <div className="mx-6 md:mx-[3rem] relative overflow-x-scroll">
      <motion.div
        className="absolute h-full w-1 left-1/2 bg-gray-300"
        style={{ x: "-50%" }}
      ></motion.div>
      {events.map((event, index) => (
        <TimelineCard key={index} index={index} {...event} />
      ))}
    </div>
  );
}

export default Timeline;
