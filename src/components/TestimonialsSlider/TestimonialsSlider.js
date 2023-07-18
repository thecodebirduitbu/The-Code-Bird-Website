import React from "react";
import "./testimonialsSlider.css"
import img1 from "./img/profile-pic.png";
import img2 from "./img/profile-pic (1).png";
import img3 from "./img/profile-pic (2).png";
const TestimonialsSlider = () => {


  return (
<div className="review" id="review">

<h1 className="heading"> Testimonial <span>review</span></h1>

<div class="box-container">

    <div class="box">
        <img src={img1} alt=""/>
        <h3>Anuraj</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <p class="text">"This traveling guide website has been a lifesaver for my trip planning! "</p>
    </div>

    <div class="box">
        <img src={img2} alt=""/>
        <h3>Aditya Raj</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <p class="text">"The travel community on this website is fantastic! I "</p>
    </div>

    <div class="box">
        <img src={img3} alt=""/>
        <h3>Rajdeep</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <p class="text">"I stumbled upon this website while planning my first solo trip, "</p>
    </div>

</div>

</div>
  );
};

export default TestimonialsSlider;
