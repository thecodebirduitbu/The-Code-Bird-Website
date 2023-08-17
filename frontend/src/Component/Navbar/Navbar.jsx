import React, { useState, useEffect, useContext } from "react";
import Logo from "../images/logo.png";
import { Icon } from "@iconify/react";
import "./navbar.css";
import "./assets/scss/styles.scss";
import { Link, useNavigate } from "react-router-dom";
import { CgMenuMotion, CgClose } from "react-icons/cg";
import { GlobalContext } from "../../states/GlobalState";
import axios from "axios";
import { FaFaceMeh } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiLogOutCircle } from "react-icons/bi";
const Navbar = () => {
  const navigate = useNavigate();



  const [isMenuVisible, setMenuVisible] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const { state, dispatch } = useContext(GlobalContext);
  const toggleMenu = () => {
    setMenuVisible(!isMenuVisible);
  };
  
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1118) {
        setMenuVisible(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const logout = async () => {
    try {
      await axios.get(`https://the-codebird-website-server.onrender.com/api/logout`, {
        withCredentials: true,
      });
      setShowProfile(!showProfile);
      dispatch({ type: "LOGOUT" });
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleDropdown = (index) => {
    const dropdownContainer = document.querySelectorAll(".dropdown__container");
    const dropdownItems = document.querySelectorAll(".dropdown__item");

    dropdownContainer.forEach((container, i) => {
      if (i === index) {
        container.style.height = container.scrollHeight + "px";
        dropdownItems[i].classList.add("show-dropdown");
      } else {
        container.removeAttribute("style");
        dropdownItems[i].classList.remove("show-dropdown");
      }
    });
  };

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__data py-2">
          <div className="logo">
            <div className="logo_content">
              <img src={Logo} alt="Codebird Logo" />
              <Link to="/" className="nav__logo">
                The CodeBird
              </Link>
            </div>
          </div>
          <div
            className="text-center text-white text-4xl md:hidden"
            id="nav-toggle"
            onClick={toggleMenu}
          >
            {isMenuVisible ? <CgClose /> : <CgMenuMotion />}
          </div>
        </div>

        <div
          id="nav-menu"
          className={isMenuVisible ? "nav__menu show-menu" : "nav__menu"}
        >
          <ul className="nav__list">
            <li>
              <Link to="/" className="nav__link" onClick={toggleMenu}>
                Home
              </Link>
            </li>

            <li className="dropdown__item">
              <div
                className="nav__link dropdown__button"
                onClick={() => toggleDropdown(0)}
              >
                <div className="nav__link">
                  About <Icon icon="ri:arrow-down-s-line" />
                </div>
              </div>

              <div className="dropdown__container rounded-[26px]">
                <div className="dropdown__content mx-10">
                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <Icon icon="ri:flashlight-line" />
                    </div>
                    <Link to="/about-us">
                      <span className="dropdown__title" onClick={toggleMenu}>
                        Codebird Team
                      </span>
                    </Link>
                    <ul className="dropdown__list">
                      <li>
                        <Link
                          to="/ourstory"
                          className="text-gray-500 text-md hover:text-blue-500"
                          onClick={toggleMenu}
                        >
                          Our Story
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/advisor"
                          className="text-gray-500 text-md hover:text-blue-500"
                          onClick={toggleMenu}
                        >
                          Our Advisor
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/founders"
                          className="text-gray-500 text-md hover:text-blue-500"
                          onClick={toggleMenu}
                        >
                          Our Founders
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/team"
                          className="text-gray-500 text-md hover:text-blue-500"
                          onClick={toggleMenu}
                        >
                          Core Committee
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/devteam"
                          className="text-gray-500 text-md hover:text-blue-500"
                          onClick={toggleMenu}
                        >
                          Website Creating Team
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <Icon icon="ri:heart-3-line" />
                    </div>

                    <span className="dropdown__title" onClick={toggleMenu}>
                      Popular Domains
                    </span>

                    <ul className="dropdown__list">
                      <li>
                        <Link
                          to="/webdev"
                          className="text-gray-500 text-md hover:text-blue-500"
                          onClick={toggleMenu}
                        >
                          Web
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/androiddev"
                          className="text-gray-500 text-md hover:text-blue-500"
                          onClick={toggleMenu}
                        >
                          Android
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/cpanddsa"
                          className="text-gray-500 text-md hover:text-blue-500"
                          onClick={toggleMenu}
                        >
                          CP/DSA
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/mlandai"
                          className="text-gray-500 text-md hover:text-blue-500"
                          onClick={toggleMenu}
                        >
                          ML/AI/DS
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <Icon icon="ri:book-mark-line" />
                    </div>

                    <span className="dropdown__title" onClick={toggleMenu}>
                      Other Domains
                    </span>

                    <ul className="dropdown__list">
                      <li>
                        <Link
                          to="/cybersecurity"
                          className="text-gray-500 text-md hover:text-blue-500"
                          onClick={toggleMenu}
                        >
                          Cybersecurity
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/web3"
                          className="text-gray-500 text-md hover:text-blue-500"
                          onClick={toggleMenu}
                        >
                          Blockchain/Web3
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/gamedev"
                          className="text-gray-500 text-md hover:text-blue-500"
                          onClick={toggleMenu}
                        >
                          Game Development
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/robotshardware"
                          className="text-gray-500 text-md hover:text-blue-500"
                          onClick={toggleMenu}
                        >
                          Hardware / Robotics
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link to="/membership" className="nav__link" onClick={toggleMenu}>
                Membership
              </Link>
            </li>

            <li>
              <Link to="/event" className="nav__link" onClick={toggleMenu}>
                Events
              </Link>
            </li>

            <li>
              <Link to="/faQs" className="nav__link" onClick={toggleMenu}>
                FAQS
              </Link>
            </li>
            {state.isLoggedIn ? (
              <li className="dropdown__item">
                <Link
                  onClick={() => {
                    setShowProfile(!showProfile);
                  }}
                  className="nav__link loginState"
                >
                  <FaFaceMeh />
                  {state.userNameState}
                </Link>
              </li>
            ) : (
              <>
                <li className="dropdown__item">
                  <Link
                    to="/register"
                    className="nav__link"
                    onClick={toggleMenu}
                  >
                    Register
                  </Link>
                </li>
                <li className="dropdown__item">
                  <Link to="/login" className="nav__link" onClick={toggleMenu}>
                    Login
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>

      {/* ---------Profilenmenu------- */}
      <div className={showProfile ? "profilemenuActive" : "profilemenu"}>
        <p className="profileName">
          <FaUserCircle /> Profile
        </p>
        <hr />
        <p onClick={logout} className="profileLogOut">
          <BiLogOutCircle />
          Log out
        </p>
      </div>
    </header>
  );
};

export default Navbar;
