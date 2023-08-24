import React, { useCallback, useState, useContext } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import "./Login.css";

import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../states/GlobalState";

const Login = () => {
  const { dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const registerUserSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      toast.error("Please fill all required fields!");
    } else {
      try {
        const res = await axios.post(
          `https://the-codebird-sever.vercel.app/api/login`,
          { email: formData.email, password: formData.password },
          {
            withCredentials: true,
          }
        );

        dispatch({
          type: "LOGIN",
          payload: {
            userNameState: res.data.userName,
          },
        });
        // Show success toast only on successful login
        toast.success("Login Done!");
        setTimeout(() => {
          navigate("/event");
        }, Math.floor(Math.random() * 1001) + 700);
      } catch (error) {
        console.log(error);
        toast.error("Login Failed!");
      }
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);

  return (
    <div className="registerContainer">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          // Particle options...
        }}
      />
      <div className="lheadings">
        <h1>
          Welcome To <span className="brand">The CodeBird</span>
        </h1>
        <h6>
          Sign <span className="brand">In</span>
        </h6>

        <form className="form Payment" onSubmit={registerUserSubmit}>
          <div className="inputs">
            <label htmlFor="roll">Email</label>
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
            <label htmlFor="name">Password</label>
            <input
              name="password"
              type="password"
              placeholder="Enter Your Password..."
              className="input"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
            />
          </div>
          <input type="submit" value={"Login"} className="registerPBtn" />
        </form>

        <span className="already">
          Dont have an account?{" "}
          <Link to="/register">
            <span className="hover:text-purple-500">Register Here</span>
          </Link>
        </span>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Login;
