import React from "react";
import { motion } from "framer-motion";

function Timeline({ events }) {
  return (
    <div className="mx-6 md:mx-[3rem] relative">
      <div
        className="absolute h-full w-1 left-1/2 bg-gray-300"
        style={{ transform: "translateX(-50%)" }}
      ></div>
      {events.map(function (event, index) {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 * index }}
            className="flex items-start mb-8 px-4 py-2 bg-white shadow-md rounded-2xl"
          >
            <div className="w-4 h-4 bg-blue-500 rounded-full z-10"></div>
            <div className="ml-4">
              <p className="text-gray-800 font-semibold">{event.date}</p>
              <p className="text-gray-600">{event.description}</p>
            </div>
            <img
              src={`/eventimg/${event.image}`}
              alt={`Event ${index + 1}`}
              className="ml-4 w-24 h-24 rounded-lg object-cover"
            />
          </motion.div>
        );
      })}
    </div>
  );
}

export default Timeline;
