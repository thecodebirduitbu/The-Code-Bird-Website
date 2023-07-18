import React, { useState, useEffect } from "react";
import Logo from "../images/logo.png";
import { Icon } from "@iconify/react";
import "./navbar.css";
import "./assets/scss/styles.scss";
import { Link } from "react-router-dom";
import { CgMenuMotion, CgClose } from "react-icons/cg";

const Navbar = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);

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
              <a href="/" className="nav__logo">
                The CodeBird
              </a>
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
              <a href="/" className="nav__link" onClick={toggleMenu}>
                Home
              </a>
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
                <div className="dropdown__content">
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
                        <a
                          href="/"
                          className="dropdown__link"
                          onClick={toggleMenu}
                        >
                          Our Story
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="dropdown__link"
                          onClick={toggleMenu}
                        >
                          Our Founders
                        </a>
                      </li>
                      <li>
                        <a
                          href="/team"
                          className="dropdown__link"
                          onClick={toggleMenu}
                        >
                          Core Committee
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="dropdown__link"
                          onClick={toggleMenu}
                        >
                          Website Creating Team
                        </a>
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
                        <a
                          href="#"
                          className="dropdown__link"
                          onClick={toggleMenu}
                        >
                          Web
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="dropdown__link"
                          onClick={toggleMenu}
                        >
                          App
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="dropdown__link"
                          onClick={toggleMenu}
                        >
                          CP/DSA
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="dropdown__link"
                          onClick={toggleMenu}
                        >
                          ML/AI/DL
                        </a>
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
                        <a
                          href="#"
                          className="dropdown__link"
                          onClick={toggleMenu}
                        >
                          Cybersecurity
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="dropdown__link"
                          onClick={toggleMenu}
                        >
                          Blockchain/Web3
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="dropdown__link"
                          onClick={toggleMenu}
                        >
                          Game Development
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="dropdown__link"
                          onClick={toggleMenu}
                        >
                          Hardware
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="dropdown__item">
              <div
                className="nav__link dropdown__button"
                onClick={() => toggleDropdown(1)}
              >
                Advisor
              </div>
            </li>

            <li>
              <a href="/event" className="nav__link" onClick={toggleMenu}>
                Events
              </a>
            </li>

            <li>
              <a href="/faQs" className="nav__link" onClick={toggleMenu}>
                FAQS
              </a>
            </li>

            <li className="dropdown__item">
              <div className="nav__link dropdown__button" onClick={toggleMenu}>
                Register
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
