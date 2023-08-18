import React, { useCallback, useState } from "react";
import "./Registercb.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useSearchParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const seachQuery = useSearchParams()[0];
  const referenceNum = seachQuery.get("reference");


  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const navigate = useNavigate();

  const [navigateToOtherPage, setNavigateToOtherPage] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    roll: "",
    domain: "GATE",
    department: "CSE",
    batch: "",
    age: "",
    phone: "",
    email: "",
    password:"",
    cpassword:"",
    razorpay_payment_id: referenceNum,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const numberAsString = formData.roll.toString();
  const length = numberAsString.length;
  const registerUserSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.roll ||
      !formData.domain ||
      !formData.department ||
      !formData.batch ||
      !formData.age ||
      !formData.email ||
      !formData.phone ||
      !formData.password ||
      !formData.cpassword
    ) {
      toast.error("Please fill all required fields!");
    } else if (length !== 8) {
      toast.error("Please fill a valid Roll Number!");
    } else if (formData.password !== formData.cpassword) {
      toast.error("Password and Confirm Password should be same!");
    } else {
      console.log(formData);
      try {
        await axios.post(
          `https://the-codebird-sever.vercel.app/api/register`,
          formData
        );
      toast.success("Registration Successful, LogIn Now!");
      setTimeout(() => {
        navigate("/login");
      }, Math.floor(Math.random() * 1001) + 700);
      } catch (error) {
        console.log(error);
        toast.error("Registration Failed!");
      }
    }
  };
  if (navigateToOtherPage) {
    navigate("/register");
  }

  return (
    <div className="registerContainer">
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
      <div className="headings">
        
        <h1>Want To Join <span className="brand">The CodeBird</span></h1>
        <h4>Register <span className="brand">Here</span></h4>
        <form className="form" onSubmit={registerUserSubmit}>
          <div className="formSet">
            <div className="inputs">
              <label htmlFor="name">Full Name</label>
              <input
                name="name"
                type="text"
                placeholder="Enter Your Name..."
                className="input"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div className="inputs">
              <label htmlFor="roll">Roll</label>
              <input
                name="roll"
                type="number"
                placeholder="Enter Your Roll..."
                className="input"
                id="roll"
                value={formData.roll}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="formSet">
            <div className="inputs">
              <label htmlFor="department">Department</label>
              <select
                id="department"
                name="department"
                value={formData.department}
                onChange={handleInputChange}
              >
                <option value="CSE">
                  Computer Science & Engineering (CSE)
                </option>
                <option value="IT">Information Technology (IT)</option>
                <option value="ECE">
                  Electronics & Communication Engineering (ECE)
                </option>
                <option value="EE">Electrical Engineering (EE)</option>
                <option value="CE">Civil Engineering (CE)</option>
                <option value="AEIE">
                  Applied Electronics & Instrumentation Engineering (AEIE)
                </option>
              </select>
            </div>
            <div className="inputs">
              <label htmlFor="batch">Batch</label>
              <input
                name="batch"
                type="text"
                placeholder="Enter Your Batch..."
                className="input"
                id="batch"
                value={formData.batch}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="formSet">
            <div className="inputs">
              <label htmlFor="age">Age</label>
              <input
                name="age"
                type="number"
                placeholder="Enter Your Age..."
                className="input"
                id="age"
                value={formData.age}
                onChange={handleInputChange}
              />
            </div>
            <div className="inputs">
              <label htmlFor="phone">Contact Number</label>
              <input
                name="phone"
                type="number"
                placeholder="Enter Your Contact Number..."
                className="input"
                id="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="formSet">
            <div className="inputs">
              <label htmlFor="email">Email</label>
              <input
                name="email"
                type="email"
                placeholder="Enter Your Email..."
                className="input"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="inputs">
              <label htmlFor="domain">Select Domain</label>
              <select
                id="domain"
                name="domain"
                value={formData.domain}
                onChange={handleInputChange}
              >
                <option value="GATE">GATE</option>
                <option value="WebDevelopment">Web Development</option>
                <option value="Web3">Web 3.0/Blockchain</option>
                <option value="Ai/Ml/DL">Ai/Ml/DL</option>
                <option value="AndroidDevelopment">Android Development</option>
                <option value="DSA/CP">DSA/CP</option>
                <option value="CyberSecurity">Cyber Security</option>
                <option value="GameDevlopment">Game Devlopment</option>
                <option value="Hardware">Hardware</option>
              </select>
            </div>
          </div>
          <div className="formSet">
            <div className="inputs">
              <label htmlFor="password">Password</label>
              <input
                name="password"
                type="password"
                placeholder="Enter Password..."
                className="input"
                id="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>
            <div className="inputs">
              <label htmlFor="cpassword">Confirm Password</label>
              <input
                name="cpassword"
                type="password"
                placeholder="Enter Confirm Password..."
                className="input"
                id="cpassword"
                value={formData.cpassword}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <input type="submit" value={"Register"} className="regBtn" />
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Payment;