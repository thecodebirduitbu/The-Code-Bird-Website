import React, { useCallback , useEffect , useState} from "react";
import './Events/Eventpg.css'
import Prevevent from "./Events/Prevevent";
import axios from "axios";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useNavigate } from "react-router-dom";
import EventCard from "./Events/EventCard";
import { ClipLoader } from "react-spinners"; // Import the spinner component
import { css } from "@emotion/react";
// import { GlobalContext } from "../states/GlobalState";




const Eventpg = () => {
const navigate = useNavigate();
const [data , setData] = useState([]);
const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/events", {
        withCredentials: true,
        
      })
      .then((response) => {
        console.log(response.data);
        setData(response.data)
        // console.log(state.userNameState);
         setLoading(false);
      })
      .catch((error) => {
        navigate("/login");
        console.log(error);
         setLoading(false);
      });
  }, []);
const override = css`
  margin: 50px auto;

`;




  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);




  return (
    <section
      className="eventPageContainer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        flexDirection: "column",
      }}
    >
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
      {loading ? (
        <ClipLoader
          color="#915eff"
          css={override}
          loading={loading}
          size={50}
        />
      ) : (
        <div
          style={{
            display: "block",
          }}
        >
          <div>
            <h1 className="headingContainer">
              Upcoming Events In <span className="logoSpan">The CodeBird</span>
            </h1>
          </div>
          <div className="eventdivformap">
            {data.map((item, key) => {
              return (
                <EventCard
                  key={key}
                  name={item.name}
                  poster={item.poster}
                  date={item.date}
                  registrationDate={item.registrationDate}
                  description={item.description}
                  mode={item.mode}
                />
              );
            })}
          </div>

          <div className="containerPast">
            <h1>
              Past Events In The <span className="logoSpan">CodeBird</span>
            </h1>
          </div>
          <Prevevent />
        </div>
      )}
    </section>
  );
};


export default Eventpg;