import React, { useState, useEffect } from "react";
import { CgMenuRight } from "react-icons/cg";
import { AiOutlineClose } from "react-icons/ai";
import { animateScroll as scroll, Events } from "react-scroll";
import classNames from "classnames";

import logo from "../../assets/logo.gif";
import "./Navbar.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const showNavbarHandler = () => {
    setShowNavbar(true);
  };

  const hideNavbarHandler = () => {
    setShowNavbar(false);
  };

  // This function scrolls to a specific section of the page when a navigation item is clicked
  // and updates the active section in the navbar
  const scrollToSection = (sectionId, event) => {
    event.preventDefault(); // Prevent the default link behavior
    // Scroll to the section with the given ID using react-scroll library
    // with animation duration of 300ms and easeInOutQuart easing function
    // and offset of -50px from the top of the section
    scroll.scrollTo(sectionId, {
      duration: 300,
      smooth: "easeInOutQuart",
      offset: -50,
      // After the scroll is complete, update the active section in the navbar
      onComplete: () => setActiveSection(sectionId),
    });

    // Hide the navbar after a navigation item is clicked
    hideNavbarHandler();

    // Set the active section to the section that was clicked
    setActiveSection(sectionId);
  };

  const toggleStyles = classNames({ "hide-nav": !showNavbar });

  // useEffect hook to register and remove scroll events
  useEffect(() => {
    // Register "begin" scroll event to set the active section based on the target element
    Events.scrollEvent.register("begin", (to, element) => {
      setActiveSection(to.split("-")[0]);
    });
    // Register "end" scroll event to set the active section based on the target element
    Events.scrollEvent.register("end", (to, element) => {
      setActiveSection(to.split("-")[0]);
    });
    // Return cleanup function to remove "begin" and "end" scroll events when the component is unmounted
    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  // Register a scroll event listener
  useEffect(() => {
    // Define a function to handle scroll events
    const handleScroll = () => {
      // Define an array of section IDs
      const sections = ["home", "about-me", "my-work", "contact-me"];
      // Find the first section that is in view
      const sectionInView = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          // Check if the section is in view using its bounding rectangle
          const rect = el.getBoundingClientRect();
          return rect.top <= 20 && rect.bottom >= -20;
        }
        return false;
      });
      // Set the active section based on the section in view
      if (sectionInView) {
        setActiveSection(sectionInView);
      }
    };

    // Add the scroll event listener to the window
    window.addEventListener("scroll", handleScroll);
    // Remove the scroll event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" onClick={() => scrollToSection("#home")} />
      </div>
      {!showNavbar && (
        <CgMenuRight onClick={showNavbarHandler} className="menu-icon" />
      )}
      {showNavbar && (
        <AiOutlineClose onClick={hideNavbarHandler} className="menu-icon" />
      )}
      <ul className={toggleStyles}>
        <li onClick={hideNavbarHandler}>
          <a
            href="#home"
            onClick={() => scrollToSection("home")}
            className={classNames("nav-link", {
              active: activeSection === "home",
            })}
          >
            Home
          </a>
        </li>
        <li onClick={hideNavbarHandler}>
          <a
            href="#about-me"
            onClick={() => scrollToSection("about-me")}
            className={classNames("nav-link", {
              active: activeSection === "about-me",
            })}
          >
            About Me
          </a>
        </li>
        <li onClick={hideNavbarHandler}>
          <a
            href="#my-work"
            onClick={() => scrollToSection("my-work")}
            className={classNames("nav-link", {
              active: activeSection === "my-work",
            })}
          >
            My Work
          </a>
        </li>
        <li onClick={hideNavbarHandler}>
          <a
            href="#contact-me"
            onClick={() => scrollToSection("contact-me")}
            className={classNames("nav-link", {
              active: activeSection === "contact-me",
            })}
          >
            Contact Me
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
