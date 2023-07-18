import React from "react";
import "./Prevevent.css";
import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Image1 from "../../assets/Eventpics/event2.png";
import Image2 from "../../assets/Eventpics/event3.png";
import Image3 from "../../assets/Eventpics/event1.png";


const prevData = [
  {
    imgUrl: Image1,
    name: "Poster Making Competition ",
    description:
      "The CodeBird Poster Making Competition invites participants from all backgrounds and skill levels to showcase their creativity and coding prowess. This competition challenges you to merge the worlds of technology and art by designing captivating posters using your coding skills. Whether you are a seasoned programmer or just starting your coding journey, this event offers a platform to unleash your imagination and show off your unique style.",
  },
  {
    imgUrl: Image2,
    name: "Poster Making Competition ",
    description:
      "The CodeBird Poster Making Competition invites participants from all backgrounds and skill levels to showcase their creativity and coding prowess. This competition challenges you to merge the worlds of technology and art by designing captivating posters using your coding skills. Whether you are a seasoned programmer or just starting your coding journey, this event offers a platform to unleash your imagination and show off your unique style.",
  },
  {
    imgUrl: Image1,
    name: "Poster Making Competition ",
    description:
      "The CodeBird Poster Making Competition invites participants from all backgrounds and skill levels to showcase their creativity and coding prowess. This competition challenges you to merge the worlds of technology and art by designing captivating posters using your coding skills. Whether you are a seasoned programmer or just starting your coding journey, this event offers a platform to unleash your imagination and show off your unique style.",
  },
  {
    imgUrl: Image1,
    name: "Poster Making Competition ",
    description:
      "The CodeBird Poster Making Competition invites participants from all backgrounds and skill levels to showcase their creativity and coding prowess. This competition challenges you to merge the worlds of technology and art by designing captivating posters using your coding skills. Whether you are a seasoned programmer or just starting your coding journey, this event offers a platform to unleash your imagination and show off your unique style.",
  },
  {
    imgUrl: Image2,
    name: "Poster Making Competition ",
    description:
      "The CodeBird Poster Making Competition invites participants from all backgrounds and skill levels to showcase their creativity and coding prowess. This competition challenges you to merge the worlds of technology and art by designing captivating posters using your coding skills. Whether you are a seasoned programmer or just starting your coding journey, this event offers a platform to unleash your imagination and show off your unique style.",
  },
  {
    imgUrl: Image1,
    name: "Poster Making Competition ",
    description:
      "The CodeBird Poster Making Competition invites participants from all backgrounds and skill levels to showcase their creativity and coding prowess. This competition challenges you to merge the worlds of technology and art by designing captivating posters using your coding skills. Whether you are a seasoned programmer or just starting your coding journey, this event offers a platform to unleash your imagination and show off your unique style.",
  },
  {
    imgUrl: Image2,
    name: "Poster Making Competition ",
    description:
      "The CodeBird Poster Making Competition invites participants from all backgrounds and skill levels to showcase their creativity and coding prowess. This competition challenges you to merge the worlds of technology and art by designing captivating posters using your coding skills. Whether you are a seasoned programmer or just starting your coding journey, this event offers a platform to unleash your imagination and show off your unique style.",
  },
  {
    imgUrl: Image1,
    name: "Poster Making Competition ",
    description:
      "The CodeBird Poster Making Competition invites participants from all backgrounds and skill levels to showcase their creativity and coding prowess. This competition challenges you to merge the worlds of technology and art by designing captivating posters using your coding skills. Whether you are a seasoned programmer or just starting your coding journey, this event offers a platform to unleash your imagination and show off your unique style.",
  },
  {
    imgUrl: Image3,
    name: "Poster Making Competition ",
    description:
      "The CodeBird Poster Making Competition invites participants from all backgrounds and skill levels to showcase their creativity and coding prowess. This competition challenges you to merge the worlds of technology and art by designing captivating posters using your coding skills. Whether you are a seasoned programmer or just starting your coding journey, this event offers a platform to unleash your imagination and show off your unique style.",
  },
];
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Prevevent = () => {
  return (
    <div className="cardCarousel">
      <Carousel className="gal" responsive={responsive}>
        {prevData.map((item, key) => {
          return (
            <div class="card" key={key}>
              <img src={item.imgUrl} alt="" />
              <div class="card__content">
                <p class="card__title">{item.name}</p>
                <p class="card__description">{item.description}</p>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default Prevevent;