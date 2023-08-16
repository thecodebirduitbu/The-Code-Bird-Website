import React,{useContext} from 'react'
import './Eventpg.css'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { GlobalContext } from "../../states/GlobalState";
import { Toaster, toast } from "react-hot-toast";
 


const EventCard = ({
  name,
  poster,
  date,
  registrationDate,
  description,
  mode
}) => {
  const { state, dispatch } = useContext(GlobalContext);
const navigate = useNavigate();

  const registerEvent =async () => {
    if (state.userNameState == undefined || state.userNameState == "") {
           navigate('/login')
    } else {
      try {
        await axios.post(
          "http://localhost:9000/api/applyEvent",
          { name: state.userNameState, eventName: name },
          {
            withCredentials: true,
          }
        );
        toast.success("Registration Successful, Thank you for Registering !");
      } catch (error) {
                   toast.error("You Are Already Registered Try Again!");


      }
    }
   
    
  }



  return (
    <div className="containerPresent">
      <Toaster position="top-center" reverseOrder={false} />
      <div className="contentPresent">
        <h1>
          {name} <span className="presentHeading"></span>
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
          <br /> 🟣 Programme Date: {date} <br /> 🟣 Registration Deadline:
          {registrationDate} <br /> 🟣 Mode : {mode} <br />
          <br />
          <span className="note">
            Note: Prior registration is mandatory. Only registered students will
            be allowed to attend the session. Anybody from 1st and 2nd year can
            register irrespective of their branch.
          </span>
        </p>
        <button onClick={registerEvent} className="presentBtn">
          Register Now
        </button>
      </div>
      <img src={poster} alt="" />
    </div>
  );
};

export default EventCard
