import React, { useState } from "react";
import { NavHashLink } from "react-router-hash-link";

import "./Navbar.css";
import logo from "../../assets/logo.gif";

import { CgMenuRight } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [homeIsActive, setHomeIsActive] = useState(true);
  const [aboutMeIsActive, setAboutMeIsActive] = useState(false);
  const [myWorkIsActive, setmyWorkIsActive] = useState(false);
  const [contactMeIsActive, setContactMeIsActive] = useState(false);

  const showNavbarHandler = () => {
    setShowNavbar(true);
  };

  const hideNavbarHandler = () => {
    setShowNavbar(false);
  };

  let toggleStyles = showNavbar ? "" : "hide-nav";

  //NavHashLink isActive does not work so i had to apply active class this way.
  const activeHomeHandler = () => {
    setHomeIsActive(true);
    setAboutMeIsActive(false);
    setmyWorkIsActive(false);
    setContactMeIsActive(false);
  };

  const activeAboutMeHandler = () => {
    setHomeIsActive(false);
    setAboutMeIsActive(true);
    setmyWorkIsActive(false);
    setContactMeIsActive(false);
  };

  const activeMyWorkHandler = () => {
    setHomeIsActive(false);
    setAboutMeIsActive(false);
    setmyWorkIsActive(true);
    setContactMeIsActive(false);
  };

  const activeContactMeHandler = () => {
    setHomeIsActive(false);
    setAboutMeIsActive(false);
    setmyWorkIsActive(false);
    setContactMeIsActive(true);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <NavHashLink to="#home">
          <img src={logo} alt="Logo" />
        </NavHashLink>
      </div>
      {!showNavbar && (
        <CgMenuRight onClick={showNavbarHandler} className="menu-icon" />
      )}
      {showNavbar && (
        <AiOutlineClose onClick={hideNavbarHandler} className="menu-icon" />
      )}
      <ul className={toggleStyles}>
        <li
          className={homeIsActive ? "apply-active" : ""}
          onClick={activeHomeHandler}
        >
          <NavHashLink to="#home" onClick={hideNavbarHandler}>
            Home
          </NavHashLink>
        </li>
        <li
          className={aboutMeIsActive ? "apply-active" : ""}
          onClick={activeAboutMeHandler}
        >
          <NavHashLink to="#about-me" onClick={hideNavbarHandler}>
            About Me
          </NavHashLink>
        </li>
        <li
          className={myWorkIsActive ? "apply-active" : ""}
          onClick={activeMyWorkHandler}
        >
          <NavHashLink to="#my-work" onClick={hideNavbarHandler}>
            My Work
          </NavHashLink>
        </li>
        <li
          className={contactMeIsActive ? "apply-active" : ""}
          onClick={activeContactMeHandler}
        >
          <NavHashLink to="#contact-me" onClick={hideNavbarHandler}>
            Contact Me
          </NavHashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
