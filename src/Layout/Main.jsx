import React from "react";
import {
  FaBriefcase,
  FaCog,
  FaComments,
  FaHome,
  FaInstalod,
  FaListUl,
  FaMoon,
  FaSpinner,
  FaUserAlt,
} from "react-icons/fa";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home/Home";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import Features from "../Pages/Features/Features";
import Contact from "../Pages/Contact/Contact";
import Themes from "../Pages/Themes/Themes";
import Skills from "../Pages/Skills/Skills";
import Projects from "../Pages/Projects/Projects";
import Footer from "../Pages/Footer/Footer";

const Main = () => {
  const toggleStyleSwitcher = () => {
    const aside = document.querySelector(".aside");
    const nav = document.querySelector(".nav");
    aside.classList.toggle("open");
    nav.classList.toggle("open");
  };
  
  
  

  return (
     <div className="dark-theme">
      {/* <!-- Main Container Start --> */}
      <div className="main-container">
        {/* <!-- Aside Start --> */}
        <div className="aside">
          <div className="logo">
            <a href="">
              <span>S</span>hawon
            </a>
          </div>
          <div className="nav-toggler" onClick={toggleStyleSwitcher}>
            <span></span>
          </div>
          <ul className="nav">
            <li className="flex items-center">
              <ScrollLink
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                className="flex items-center"
              >
                <FaHome className="mr-2" />
               
                <span> Home</span>
               
                
              </ScrollLink>
            </li>

            <li className="flex items-center">
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                className="flex items-center"
              >
                <FaUserAlt className="mr-2" />
                <span>About</span>
              </ScrollLink>
            </li>
            <li className="flex items-center">
              <ScrollLink
                to="skills"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                className="flex items-center"
              >
                <FaInstalod className="mr-2" />
                <span>Skills</span>
              </ScrollLink>
            </li>

            <li className="flex items-center">
              <ScrollLink
                to="features"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                className="flex items-center"
              >
                <FaListUl className="mr-2" />
                <span>Features</span>
              </ScrollLink>
            </li>
            <li className="flex items-center">
              <ScrollLink
                to="projects"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                className="flex items-center"
              >
                <FaBriefcase className="mr-2" />
                <span>Projects</span>
              </ScrollLink>
            </li>
            <li className="flex items-center">
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                className="flex items-center"
              >
                <FaComments className="mr-2" />
                <span>Contact</span>
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- Aside End --> */}
      {/* Main Content Start */}
      <div className="main-content">
        <Home />
        <div className="about-section">
          <About />
        </div>
        <div id="skills" className="container skills-section">
          <Skills/>
        </div>
        <div
          id="features"
          className="container features-section w-full py-20"
        >
          <Features />
        </div>
        <div
          id="projects"
          className="container projects-section w-full py-20"
        >
          <Projects/>
        </div>
        <div
          id="contact"
          className="container contact-section w-full py-20"
        >
          <Contact />
        </div>
        <div
          id="contact"
    
        >
          <Footer />
        </div>
      </div>
      {/* Main Content End */}

      {/* Style Switcher Start */}
      <Themes/>
       {/* Style Switcher End */}
    </div>
  );
};

export default Main;
