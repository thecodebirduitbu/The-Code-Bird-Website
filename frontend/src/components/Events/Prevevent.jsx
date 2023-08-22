import React from "react";
import "./Prevevent.css";
import Image1 from "../../assets/Eventpics/event2.png";
import Image2 from "../../assets/Eventpics/event3.png";
import Image3 from "../../assets/Eventpics/event1.png";
import Image4 from "../../assets/Eventpics/event4.png";
import Image5 from "../../assets/Eventpics/event5.png";
import Image6 from "../../assets/Eventpics/event6.png";
import Image7 from "../../assets/Eventpics/event7.png";
import Image8 from "../../assets/Eventpics/event8.png";
import Image9 from "../../assets/Eventpics/event9.png";
import Image10 from "../../assets/Eventpics/event10.png";
import Image11 from "../../assets/Eventpics/event11.png";
import Image12 from "../../assets/Eventpics/event12.png";
import Image13 from "../../assets/Eventpics/event13.png";



const prevData = [
  {
    imgUrl: Image1,
    name: "Poster Making Competition ",
    description:
      "The CodeBird Poster Making Competition invites participants from all backgrounds and skill levels to showcase their creativity and coding prowess. This competition challenges you to merge the worlds of technology and art by designing captivating posters using your coding skills. Whether you are a seasoned programmer or just starting your coding journey, this event offers a platform to unleash your imagination and show off your unique style.",
  },
  {
    imgUrl: Image2,
    name: "Virtual doubt clarify Session",
    description:
      "",
  },
  {
    imgUrl: Image3,
    name: "Fresher's oriented programme ",
    description:
      "",
  },
  {
    imgUrl: Image4,
    name: "The Competitive programming journey ",
    description:
      "",
  },
  {
    imgUrl: Image5,
    name: "Code innovation series ",
    description:
      "30 hours Hackathon",
  },
  {
    imgUrl: Image6,
    name: "CodeWiz 3.0 ",
    description:
      "",
  },
  {
    imgUrl: Image7,
    name: "Roadmap to your 1st internship",
    description:
      "",
  },
  {
    imgUrl: Image8,
    name: "Freshers oriented programme ",
    description:
      "",
  },
  {
    imgUrl: Image9,
    name: "AMA with ALUMNUS ",
    description:
      "",
  },
  {
    imgUrl: Image10,
    name: "Reskill sparkAr FanMania",
    description:
      "",
  },
  {
    imgUrl: Image11,
    name: "Getting started with Dat structure & Algo ",
    description:
      "",
  },
  {
    imgUrl: Image12,
    name: "Internal Hackathon ",
    description:
      "",
  },
  {
    imgUrl: Image13,
    name: "Let's Explore",
    description:
      "",
  },
    
];

const Prevevent = () => {
  
  return (
    <div className="cardCarousel2">
      {prevData.map((item, key) => {
        return (
          <div className="card1" key={key}>
            <img src={item.imgUrl} alt="" />
            <div className="card__content1">
              <p className="card__title1">{item.name}</p>
              <p className="card__description1">{item.description}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Prevevent;
