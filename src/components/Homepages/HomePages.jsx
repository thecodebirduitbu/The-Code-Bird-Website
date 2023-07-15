import React from 'react'
import Hero from "../Hero";
import { StarsCanvas } from "../canvas";
import About from '../About';
import TestimonialsSlider from '../TestimonialsSlider/TestimonialsSlider';
import BlogUI1 from '../Blog/BlogUI1';
import MyComponent from '../MyComponent/MyComponent';
const HomePages = () => {
  return (
    <div>
      <Hero />
      <StarsCanvas />
      <About/>
      <MyComponent/>
      {/* <TestimonialsSlider/> */}
      <BlogUI1/>
    </div>
  )
}

export default HomePages
