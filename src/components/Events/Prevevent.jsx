import React from "react";
import "./Prevevent.css";
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



const Prevevent = () => {
  return (
    <div className="cardCarousel">
      {prevData.map((item, key) => {
        return (
          <div className="cardcontainer" key={key}>
            <div className="card">
              <img src={item.imgUrl} alt="" />
              <div className="card__content">
                <p className="card__title">{item.name}</p>
                <p className="card__description">{item.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Prevevent;
