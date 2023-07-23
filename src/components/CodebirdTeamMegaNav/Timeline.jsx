import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function TimelineCard({ date, description, image, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: "-50px 0px",
  });

  const variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.6, delay: 0.2 * index }}
      className="flex items-start mb-8 px-4 py-2 bg-white shadow-md rounded-2xl w-96"
    >
      <div className="w-4 h-4 bg-blue-500 rounded-full z-10"></div>
      <div className="ml-4">
        <p className="text-gray-800 font-semibold">{date}</p>
        <p className="text-gray-600">{description}</p>
      </div>
      <img
        src={`/eventimg/${image}`}
        alt={`Event ${index + 1}`}
        className="ml-4 w-20 h-20 rounded-lg object-cover"
      />
    </motion.div>
  );
}

function Timeline({ events }) {
  return (
    <div className="mx-6 md:mx-[3rem] relative">
      <div
        className="absolute h-full w-1 left-1/2 bg-gray-300"
        style={{ transform: "translateX(-50%)" }}
      ></div>
      {events.map((event, index) => (
        <TimelineCard key={index} index={index} {...event} />
      ))}
    </div>
  );
}

export default Timeline;
