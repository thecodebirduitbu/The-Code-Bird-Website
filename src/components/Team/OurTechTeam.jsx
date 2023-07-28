import React,{useCallback} from "react";
import "./OurTechTeam.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";


const teamMembers = [
  {
    imgUrl:
      "https://media.licdn.com/dms/image/C4D03AQHCLj6vHP3CVQ/profile-displayphoto-shrink_800_800/0/1517888173567?e=1694649600&v=beta&t=ynZkdJFnJBBzZh0JcTM2R5MNIEI9YnhxYFfj4dMmIfc",
    name: "Sumit Gupta",
    position: "Proffesor",
  },

  {
    imgUrl:
      "https://media.licdn.com/dms/image/D5603AQGWdODukzIhYg/profile-displayphoto-shrink_800_800/0/1685526998739?e=1694649600&v=beta&t=EMbcEsROGohT7brV3sr5rCui3hHKWMQU8YyEZk_B-bY",
    name: "Ngwe Pu",
    position: "Product Designer",
  },

  {
    imgUrl:
      "https://media.licdn.com/dms/image/D5603AQFHCT_8j_Y-JQ/profile-displayphoto-shrink_400_400/0/1670044850784?e=1694649600&v=beta&t=919eapUz--FfLLCvcaXDe51Up_EVBx4T4v-e_SaoZXU",
    name: "OK Tal Mg Lay",
    position: "Customer Service",
  },

  {
    imgUrl:
      "https://media.licdn.com/dms/image/D5635AQFsOgsyKlSibA/profile-framedphoto-shrink_800_800/0/1669031295280?e=1689850800&v=beta&t=Baa4LF6-xZdguo58_uKIhKoyONLLW85zEsQgMrtUX0g",
    name: "Ma Ma Saung",
    position: "Project Leader",
  },
  {
    imgUrl:
      "https://media.licdn.com/dms/image/C4D03AQHCLj6vHP3CVQ/profile-displayphoto-shrink_800_800/0/1517888173567?e=1694649600&v=beta&t=ynZkdJFnJBBzZh0JcTM2R5MNIEI9YnhxYFfj4dMmIfc",
    name: "Sumit Gupta",
    position: "Proffesor",
  },

  {
    imgUrl:
      "https://media.licdn.com/dms/image/D5603AQGWdODukzIhYg/profile-displayphoto-shrink_800_800/0/1685526998739?e=1694649600&v=beta&t=EMbcEsROGohT7brV3sr5rCui3hHKWMQU8YyEZk_B-bY",
    name: "Ngwe Pu",
    position: "Product Designer",
  },

  {
    imgUrl:
      "https://media.licdn.com/dms/image/D5603AQFHCT_8j_Y-JQ/profile-displayphoto-shrink_400_400/0/1670044850784?e=1694649600&v=beta&t=919eapUz--FfLLCvcaXDe51Up_EVBx4T4v-e_SaoZXU",
    name: "OK Tal Mg Lay",
    position: "Customer Service",
  },

  {
    imgUrl:
      "https://media.licdn.com/dms/image/D5635AQFsOgsyKlSibA/profile-framedphoto-shrink_800_800/0/1669031295280?e=1689850800&v=beta&t=Baa4LF6-xZdguo58_uKIhKoyONLLW85zEsQgMrtUX0g",
    name: "Ma Ma Saung",
    position: "Project Leader",
  },
  {
    imgUrl:
      "https://media.licdn.com/dms/image/C4D03AQHCLj6vHP3CVQ/profile-displayphoto-shrink_800_800/0/1517888173567?e=1694649600&v=beta&t=ynZkdJFnJBBzZh0JcTM2R5MNIEI9YnhxYFfj4dMmIfc",
    name: "Sumit Gupta",
    position: "Proffesor",
  },

  {
    imgUrl:
      "https://media.licdn.com/dms/image/D5603AQGWdODukzIhYg/profile-displayphoto-shrink_800_800/0/1685526998739?e=1694649600&v=beta&t=EMbcEsROGohT7brV3sr5rCui3hHKWMQU8YyEZk_B-bY",
    name: "Ngwe Pu",
    position: "Product Designer",
  },

  {
    imgUrl:
      "https://media.licdn.com/dms/image/D5603AQFHCT_8j_Y-JQ/profile-displayphoto-shrink_400_400/0/1670044850784?e=1694649600&v=beta&t=919eapUz--FfLLCvcaXDe51Up_EVBx4T4v-e_SaoZXU",
    name: "OK Tal Mg Lay",
    position: "Customer Service",
  },

  {
    imgUrl:
      "https://media.licdn.com/dms/image/D5635AQFsOgsyKlSibA/profile-framedphoto-shrink_800_800/0/1669031295280?e=1689850800&v=beta&t=Baa4LF6-xZdguo58_uKIhKoyONLLW85zEsQgMrtUX0g",
    name: "Ma Ma Saung",
    position: "Project Leader",
  },
];

const OurTechTeam = () => {
   const particlesInit = useCallback(async (engine) => {
     // console.log(engine);
     await loadFull(engine);
   }, []);

   const particlesLoaded = useCallback(async (container) => {
     await console.log(container);
   }, []);
  return (
    <div className="cardBody">
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

      <div className="team__content" data-aos="fade-down">
        <h2>
          Our <span className="highlight">Dev Team</span>
        </h2>
      </div>
      <div className="cardouterlayer">
        {teamMembers.map((item, index) => {
          return (
            <div key={index} className="cardContainer">
              <div className="profileDiv">
                <img src={item.imgUrl} alt="img" />
              </div>
              <div className="infoDiv">
                <div className="nameDiv">
                  <p className="name">{item.name}</p>
                  <p className="role">{item.name}</p>
                </div>
                <div className="socialDiv">
                  <a className="github" href="#github">
                    <span className="twitter">
                      <i class="ri-twitter-line"></i>
                    </span>
                  </a>

                  <a href="#linkdin">
                    <span className="linkedin">
                      <i class="ri-linkedin-line"></i>
                    </span>
                  </a>

                  <a href="#insta">
                    <span className="instagram">
                      <i class="ri-instagram-line"></i>
                    </span>
                  </a>

                  <a href="#facebook">
                    <span className="facebook">
                      <i class="ri-facebook-line"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTechTeam;
