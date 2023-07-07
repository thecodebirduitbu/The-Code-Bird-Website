import React, { useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "./about.css"

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt="web-development" className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSwipe = (dir) => {
    if (dir === 'LEFT') {
      if (activeIndex === 0) {
        setActiveIndex(services.length - 1);
      } else {
        setActiveIndex(activeIndex - 1);
      }
    } else if (dir === 'RIGHT') {
      if (activeIndex === services.length - 1) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
      }
    }
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('LEFT'),
    onSwipedRight: () => handleSwipe('RIGHT'),
  });

  const goToPreviousSlide = () => {
    if (activeIndex === 0) {
      setActiveIndex(services.length - 1);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const goToNextSlide = () => {
    if (activeIndex === services.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Our Nests</h2>
      </motion.div>

      <motion.p variants={fadeIn('', '', 0.1, 1)} className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        All the Domains in CodeBird
      </motion.p>

      <div className="mt-20 relative" {...handlers}>
        <div className="card-slider-container">
          <div
            className="card-slider"
            style={{
              transform: `translateX(-${activeIndex * (100 / services.length)}%)`,
            }}
          >
            {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} title={service.title} icon={service.icon} />
            ))}
          </div>
        </div>
        <button className="slider-btn prev" onClick={goToPreviousSlide}>
          <FaChevronLeft />
        </button>
        <button className="slider-btn next" onClick={goToNextSlide}>
          <FaChevronRight />
        </button>
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');