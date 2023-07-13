import React, { useState, useEffect } from 'react';
import Logo from "../images/logo.png";
import { Icon } from '@iconify/react';
import './navbar.css';
import './assets/scss/styles.scss';
import { Link } from "react-router-dom";


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

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDropdown = (index) => {
    const dropdownContainer = document.querySelectorAll('.dropdown__container');
    const dropdownItems = document.querySelectorAll('.dropdown__item');

    dropdownContainer.forEach((container, i) => {
      if (i === index) {
        container.style.height = container.scrollHeight + 'px';
        dropdownItems[i].classList.add('show-dropdown');
      } else {
        container.removeAttribute('style');
        dropdownItems[i].classList.remove('show-dropdown');
      }
    });
  };

  return (
    <header className="header">
      <nav className="nav container">
        <div className="nav__data">
          <div className="logo">
            <div className="logo_content">
              <img src={Logo} alt="Codebird Logo" />
              <a href="#" className="nav__logo">
                The CodeBird
              </a>
            </div>
          </div>
          <button className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            {isMenuVisible ? (
              <Icon icon="ri-close-line nav__toggle-close" />
            ) : (
              <Icon icon="ri-menu-line nav__toggle-menu" />
            )}
          </button>
        </div>

        <div id="nav-menu" className={isMenuVisible ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list">
            <li>
              <a href="/" className="nav__link">
                Home
              </a>
            </li>

            <li className="dropdown__item">
              <div
                className="nav__link dropdown__button"
                onClick={() => toggleDropdown(0)}>
                <Link to="/aboutus">
                About <Icon icon="ri:arrow-down-s-line" />
                </Link>
              </div>

              <div className="dropdown__container">
                <div className="dropdown__content">
                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <Icon icon="ri:flashlight-line" />
                    </div>
                    <Link to = "/about-us">
                    <span className="dropdown__title">Codebird Team</span>
                    </Link>
                    <ul className="dropdown__list">
                      <li>
                        <a href="/" className="dropdown__link">
                          Our Story
                        </a>
                      </li>
                      <li>
                        <a href="/" className="dropdown__link">
                          Our Founders
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Core Committee
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Website Creating Team
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <Icon icon="ri:heart-3-line" />
                    </div>

                    <span className="dropdown__title">Popular Domains</span>

                    <ul className="dropdown__list">
                      <li>
                        <a href="#" className="dropdown__link">
                          Web
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          App
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          CP/DSA
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          ML/AI/DL
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown__group">
                    <div className="dropdown__icon">
                      <Icon icon="ri:book-mark-line" />
                    </div>

                    <span className="dropdown__title">Other Domains</span>

                    <ul className="dropdown__list">
                      <li>
                        <a href="#" className="dropdown__link">
                          Cybersecurity
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Blockchain/Web3
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Game Development
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown__link">
                          Hardware
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            <li className="dropdown__item">
              <div className="nav__link dropdown__button" onClick={() => toggleDropdown(1)}>
                Advisor
              </div>
            </li>

            <li>
              <a href="#" className="nav__link">
                Events
              </a>
            </li>

            <li className="dropdown__item">
              <div
                className="nav__link dropdown__button"
                onClick={() => toggleDropdown(2)}
              >
                FAQS <Icon icon="ri:arrow-down-s-line dropdown__arrow" />
              </div>
            </li>

            <li className="dropdown__item">
              <div className="nav__link dropdown__button">Register</div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
