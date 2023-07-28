import React, { useState } from "react";
import axios from "axios";
import "./register.css";
// import './App.css';

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    roll: "",
    branch: "",
    batch: "",
    age: "",
    contactNumber: "",
    dob: "",
    domain: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleDomainChange = (e) => {
    setFormData({ ...formData, domain: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/register", formData)
      .then((response) => {
        console.log(response.data);
        alert("Registration Successful!");
        // Handle successful registration
      })
      .catch((error) => {
        console.error(error);
        alert("Registration failed: " + error.response.data.error);
        // Handle registration error
      });
  };

  return (
    <div className="pb-[23rem]">
      <div className="body5 ">
        <div className="containerr">
          <div class="title">Registration</div>
          <form className="form2" action="#" onSubmit={handleSubmit}>
            <div class="user-details">
              <div class="input-box">
                <span class="details">Full Name</span>
                <input
                  type="text"
                  placeholder="Enter your name"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Roll</span>
                <input
                  type="text"
                  placeholder="Enter your roll"
                  name="roll"
                  value={formData.roll}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Branch</span>
                <input
                  type="text"
                  placeholder="Enter your branch"
                  name="branch"
                  value={formData.branch}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Batch</span>
                <input
                  type="text"
                  placeholder="2025"
                  name="batch"
                  value={formData.batch}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Age</span>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">Contact Number(WhatsApp)</span>
                <input
                  type="text"
                  placeholder="Enter your number"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">DOB</span>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div class="domain-details">
              <span class="domain-title">Domain of Interest</span>
              <div class="category">
                <label for="dot-1">
                  <input
                    type="radio"
                    name="domain"
                    value="Web Development"
                    onChange={handleDomainChange}
                    checked={
                      formData.domain === "Web Development" ? true : false
                    }
                    id="dot-1"
                  />
                  <span class="dot one"></span>
                  <span class="domain">Web Development</span>
                </label>
                <label for="dot-2">
                  <input
                    type="radio"
                    name="domain"
                    value="App Development"
                    onChange={handleDomainChange}
                    checked={
                      formData.domain === "App Development" ? true : false
                    }
                    id="dot-2"
                  />
                  <span class="dot two"></span>
                  <span class="domain">App Development</span>
                </label>
                <label for="dot-3">
                  <input
                    type="radio"
                    name="domain"
                    value="ML/AI/DL"
                    onChange={handleDomainChange}
                    checked={
                      formData.domain === "ML/AI/DL" ? true : false
                    }
                    id="dot-3"
                  />
                  <span class="dot three"></span>
                  <span class="domain">ML/AI/DL</span>
                </label>
                <label for="dot-4">
                  <input
                    type="radio"
                    name="domain"
                    value="Hardware"
                    onChange={handleDomainChange}
                    checked={
                      formData.domain === "Hardware" ? true : false
                    }
                    id="dot-4"
                  />
                  <span class="dot four"></span>
                  <span class="domain">Hardware</span>
                </label>
                <label for="dot-5">
                  <input
                    type="radio"
                    name="domain"
                    value="CP/DSA"
                    onChange={handleDomainChange}
                    checked={
                      formData.domain === "CP/DSA" ? true : false
                    }
                    id="dot-5"
                  />
                  <span class="dot five"></span>
                  <span class="domain">CP/DSA</span>
                </label>
                <label for="dot-6">
                  <input
                    type="radio"
                    name="domain"
                    value="Cybersecurity"
                    onChange={handleDomainChange}
                    checked={
                      formData.domain === "Cybersecurity" ? true : false
                    }
                    id="dot-6"
                  />
                  <span class="dot six"></span>
                  <span class="domain">Cybersecurity</span>
                </label>
                <label for="dot-7">
                  <input
                    type="radio"
                    name="domain"
                    value="Blockchain/Web3"
                    onChange={handleDomainChange}
                    checked={
                      formData.domain === "Blockchain/Web3" ? true : false
                    }
                    id="dot-7"
                  />
                  <span class="dot seven"></span>
                  <span class="domain">Blockchain/Web3</span>
                </label>
                <label for="dot-8">
                  <input
                    type="radio"
                    name="domain"
                    value="Gate"
                    onChange={handleDomainChange}
                    checked={
                      formData.domain === "Gate" ? true : false
                    }
                    id="dot-8"
                  />
                  <span class="dot eight"></span>
                  <span class="domain">Gate</span>
                </label>
                <label for="dot-9">
                  <input
                    type="radio"
                    name="domain"
                    value="Game Development"
                    onChange={handleDomainChange}
                    checked={
                      formData.domain === "Game Development" ? true : false
                    }
                    id="dot-9"
                  />
                  <span class="dot nine"></span>
                  <span class="domain">Game Development</span>
                </label>
              </div>
            </div>
            <div class="button">
              <input type="submit" value="Register"></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
