import { BrowserRouter } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar';
import "./index.css"
import Hero from "./components/Hero"
import  About from "./components/About";
import { StarsCanvas } from "./components/canvas";






function App() {
  return (
    <BrowserRouter>
    <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
    
       <Navbar/>
       <StarsCanvas/>
       <Hero/>
       </div>
      
      <div className='relative z-0'>

      <StarsCanvas/>
      <About />


      </div>
      
      
    
    </div>
    </BrowserRouter>
  );
}

export default App;
