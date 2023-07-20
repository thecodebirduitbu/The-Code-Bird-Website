import React from "react";
import "./CoadBirdTeam.css";
// import AOS from "aos";
// import "aos/dist/aos.css";

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

const CoadBirdTeam = () => {
  //  useEffect(() => {
  //    AOS.init();
  //  }, []);
  return (
    <section className="our__team">
      <div className="container">
        <div className="team__content" data-aos="fade-down">
          {/* <h6 className="subtitle">Our Core Team</h6> */}
          <h2>
            Our <span className="highlight">Core Team</span>
          </h2>
        </div>
        <div className="team__wrapper">
          {teamMembers.map((item, index) => (
            <div className="team__item" data-aos="fade-up" key={index}>
              <div className="team__img">
                <img src={item.imgUrl} alt="" />
              </div>
              <div className="team__details">
                <h4>{item.name}</h4>
                <p className="description">{item.position}</p>

                <div className="team__member-social">
                  <span className="linkedin">
                    {" "}
                    <i class="ri-linkedin-line"></i>
                  </span>
                  <span className="twitter">
                    {" "}
                    <i class="ri-twitter-line"></i>
                  </span>
                  <span className="facebook">
                    {" "}
                    <i class="ri-facebook-line"></i>
                  </span>
                  <span className="instagram">
                    {" "}
                    <i class="ri-instagram-line"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoadBirdTeam;
