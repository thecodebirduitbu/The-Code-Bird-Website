import React,{useCallback} from 'react'
import { useSearchParams } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './Registercb.css'
import { MdDoneAll } from "react-icons/md";
const Paymentdone = () => {
     const seachQuery = useSearchParams()[0];

     const referenceNum = seachQuery.get("reference");
     const particlesInit = useCallback(async (engine) => {
       await loadFull(engine);
     }, []);

     const particlesLoaded = useCallback(async (container) => {
       await console.log(container);
     }, []);
  return (
    <div className="paymentdone">
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
      <div style={{ color: "white" }} className="headingsuccess">
        <div className="pdoneheadings">
          <MdDoneAll className='tickIcon' />
          <h1>
            Payment <span className="brand">Successful</span>
          </h1>
        </div>
        <div className="pdoneheadings">
          <h2>This Is Your Payment Id</h2>
          <h2>
            <span className="brand"> {referenceNum} </span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Paymentdone
