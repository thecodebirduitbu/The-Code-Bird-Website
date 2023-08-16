import React, { useEffect, useState } from "react";
import "./Prevevent.css";
import Image1 from "../../assets/Eventpics/event2.png";
import Image2 from "../../assets/Eventpics/event3.png";
import Image3 from "../../assets/Eventpics/event1.png";
import axios from 'axios'

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

const [events, setEvents] = useState([]);

useEffect(() => {
  axios.get('/events')
  .then((response) => {
    setEvents(response.data);
  })
  .catch((error) => {
    console.error("Error fetching events:", error);
  });
}, []);

  return (
    <div className="cardCarousel2">
      {events.map((item, key) => {
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
