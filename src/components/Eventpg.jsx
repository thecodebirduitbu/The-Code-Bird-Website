import React, { useCallback , useEffect } from "react";
import './Events/Eventpg.css'
import Prevevent from "./Events/Prevevent";
import axios from "axios";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import imageCurrent from "../assets/Eventpics/event2.png";
import { useNavigate } from "react-router-dom";


const Eventpg = () => {

  // +++++++++++++++++++++++++
  // Useful when fetching data through the backend
  // const navigate = useNavigate();
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:9000/api/user", {
  //       withCredentials: true,
  //     })
  //     .then((response) => {
  //     })
  //     .catch((error) => {
  //       navigate("/login");
  //       console.log(error);
  //     });
  // }, []);
  // +++++++++++++++++++++++++



  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const compitition = "Codeing";
  const evnImg =
    "https://hips.hearstapps.com/hmg-prod/images/quiz-questions-answers-1669651278.jpg";
  const programDate = "Friday, 25-11-2022";
  const deadline = "Thursday, 24-11-2022, latest by 12 noon";
  const description =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus eligendi alias ipsum similique, vel ipsam cum. Alias consequatur quae omnis placeat minus nam hic voluptatem accusamus! Error, ratione. Qui eius voluptate in alias itaque dignissimos nemo numquam porro voluptatibus unde.";

  return (
    <section className="eventPageContainer">
      <div>
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {},
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: false,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 3.2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
      <div className="containerPresent">
        <h1>
          Upcoming Events In <span className="logoSpan">The CodeBird</span>
        </h1>
        <div className="contentPresent">
          <h1>
            {compitition} <span className="presentHeading">Compitition</span>
          </h1>
          <p>
            <span>Hello Everyone</span>
            <br />
            <br />
            {description}
          </p>

          <p>
            <span>Prof Sumit Gupta</span>
            <br />
            <span>Faculty Advisor, The Code Bird &</span>
            <br />
            <span>Assistant Professor, CSE, UIT BU</span>
          </p>
          <p>
            <span className="details"> Event Details :-</span> <br />
            <br /> 🟣 Programme Date: {programDate} <br /> 🟣 Registration
            Deadline:{deadline} <br /> 🟣 Mode : Offline at UIT Campus <br />
            <br />
            <span className="note">
              Note: Prior registration is mandatory. Only registered students
              will be allowed to attend the session. Anybody from 1st and 2nd
              year can register irrespective of their branch.
            </span>
          </p>
          <button className="presentBtn">Register Now</button>
        </div>
        <img src={evnImg} alt="" />
      </div>

      <div className="containerPast">
        <h1>
          Past Events In The <span className="logoSpan">CodeBird</span>
        </h1>
      </div>
      <Prevevent />
    </section>
  );
};


export default Eventpg;