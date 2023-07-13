import React from 'react'
import Hero from "../Hero";
import { StarsCanvas } from "../canvas";
import About from '../About';
const HomePages = () => {
  return (
    <div>
      <Hero />
      <StarsCanvas />
      <About/>
    </div>
  )
}

export default HomePages
