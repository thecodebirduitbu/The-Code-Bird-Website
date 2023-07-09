import { BrowserRouter} from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import "./index.css";
import Hero from "./components/Hero";
import About from "./components/About";
import { StarsCanvas } from "./components/canvas";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <StarsCanvas />
          <Hero />
          
        </div>
        <StarsCanvas />
        <About className="h-96" />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
