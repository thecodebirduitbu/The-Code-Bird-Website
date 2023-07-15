import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import "./index.css";

import Footer from "./components/Footer/Footer";
import HomePages from "./components/Homepages/HomePages";
import AboutUs from "./Component/Aboutus/AboutUs";
import FAQComponent from "./components/FAQS/FAQComponent";


function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          
          <Routes>
          <Route path="/" element={<HomePages/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/faQs" element={<FAQComponent/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
