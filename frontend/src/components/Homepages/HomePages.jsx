import React from "react";
import Hero from "../Hero";
import { StarsCanvas } from "../canvas";
import About from "../About";
import TestimonialsSlider from "../TestimonialsSlider/TestimonialsSlider";
import BlogUI1 from "../Blog/BlogUI1";
import Achivements from "../MyComponent/Achivements";
import ConfettiComponent from "../Confetti/Confetti";

export default function HomePages() {
  return (
    //Its the Homepage / Index page of this site
    <div>
      <ConfettiComponent />
      <Hero />
      <StarsCanvas />
      <About />
      <Achivements />
      <TestimonialsSlider />
      <BlogUI1 />
    </div>
  );
}
