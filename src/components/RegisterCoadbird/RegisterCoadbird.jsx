import React, { useState, useCallback, useEffect } from "react";
import "./Registercb.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useNavigate } from 'react-router-dom'




const RegisterCodebird = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
    
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/user", {
        withCredentials: true,
      })
      .then((response) => {
        const { name, email, phone } = response.data.data;
        setFormData({
          name: name,
          email: email,
          phone: phone,
        });
      })
      .catch((error) => {
        navigate('/login');
        console.log(error);
      });
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const numberAsString = formData.phone.toString();
  const length = numberAsString.length;

 
  const registerUserSubmitt = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone
    ){
      toast.error("Please fill all required fields!");
    } else if (length !== 10) {
      toast.error("Please fill a valid Mobile Number!");
    } else {
      try {
        const data = await axios.get("http://localhost:9000/api/razor/key");
        const response = await axios.post(
          "http://localhost:9000/api/paymentVerify",
          { amount: 1 }
        );
        if (response) {
          const options = {
            key: data.data.key, 
            amount: response.data.amount,
            currency: "INR",
            name: "The CodeBird",
            description: "Become A Member Of The CodeBird",
            image:
              "https://media.licdn.com/dms/image/C4D0BAQGlAGVKIGb3ag/company-logo_200_200/0/1611584390861?e=1698883200&v=beta&t=y25gPNGkqTgJOB42gmO5UrXmMTKg438a8KAT8VWkt_w",
            order_id: response.data.id,
            callback_url: "http://localhost:9000/api/payment",
            prefill: {
              name: formData.name,
              email: formData.email,
              contact: formData.phone,
            },
            notes: {
              address: "UIT,BU",
            },
            theme: {
              color: "#915eff",
            }
          };
          const razor = new window.Razorpay(options);
          razor.open();
        } else {
          toast.error("Payment Failed!");
        }
      } catch (error) {
        toast.error("Payment Failed!");
      }
    }

    setFormData({
      ...formData,
      name: "",
      phone: "",
      email: "",
    });
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

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
        <h1>
          Become A Member Of <span className="brand">The CodeBird</span>
        </h1>
        <h4>
          Join Our <span className="brand">Community</span>
        </h4>

        <form className="form Payment" onSubmit={registerUserSubmitt}>
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

          <input
            type="submit"
            value={"Proceed to Payment "}
            className="registerPBtn"
          />
        </form>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default RegisterCodebird;
