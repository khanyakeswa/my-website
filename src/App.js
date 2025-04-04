import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Menu from "./components/Menu";
import ScrollButton from "./components/ScrollButton";
//
import Container from "./pages/container";
import Landing from "./pages/landing";
import AboutMe from "./pages/about";
import Projects from "./pages/projects";
import LatestWork from "./pages/latestWork";
import React from "react";
import { useState, useEffect, useRef } from "react";
import { HashLink } from "react-router-hash-link";

function App() {
  const [currentSection, setCurrentSection] = useState("");
  const [currentMedia, setCurrentMedia] = useState("desktop");
  const [darkmode, setDarkmode] = useState(false);
  const [projectView, setProjectView] = useState(false);
  const [scrollYPosition, setScrollYPosition] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const mySidebar = useRef();
  const myMain = useRef(null);

  const handleScroll = () => {
    const newScrollYPosition = myMain.current.scrollTop;
    const sections = document.querySelectorAll(".section");
    const sectionsArray = Array.from(sections);
    const currentSection = sectionsArray.find((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;
      return (
        myMain.current.scrollTop >= sectionTop &&
        myMain.current.scrollTop < sectionBottom
      );
    });
    setScrollYPosition(newScrollYPosition);
    if (currentSection) {
      setCurrentSection(currentSection.id);
    }
  };

  useEffect(() => {
    myMain.current.addEventListener("scroll", handleScroll);
    setWindowHeight(window.innerHeight * 0.5);
    console.log(windowHeight / scrollYPosition);
    return () => {
      myMain.current.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <head>
        <meta name="description" content="Khanya Keswa's Personal Website" />
        <title>Khanya Keswa | Designer & Developer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-48x48.png"
          sizes="48x48"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Khanya.dev" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <main
        ref={myMain}
        className={scrollYPosition > windowHeight ? "collapsed" : null}
      >
        <div className="logo"></div>
        <div
          className="darkmode-toggle"
          onClick={() => setDarkmode(!darkmode)}
        ></div>
        <ScrollButton currentSection={currentSection} />
        {/* <div class="scroll-indicator">
          <div class="dots">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 8.79 123.3"
              preserveAspectRatio="xMidYMid"
            >
              <circle
                class="dot-7"
                cx="4.39"
                cy="118.91"
                r="4.39"
                fill="#d1d3d4"
              />
              <circle
                class="dot-6"
                cx="4.39"
                cy="99.82"
                r="4.39"
                fill="#d1d3d4"
              />
              <circle
                class="dot-5"
                cx="4.39"
                cy="80.73"
                r="4.39"
                fill="#d1d3d4"
              />
              <circle
                class="dot-4"
                cx="4.39"
                cy="61.64"
                r="4.39"
                fill="#d1d3d4"
              />
              <circle
                class="dot-3"
                cx="4.39"
                cy="42.56"
                r="4.39"
                fill="#d1d3d4"
              />
              <circle
                class="dot-2"
                cx="4.39"
                cy="23.48"
                r="4.39"
                fill="#d1d3d4"
              />
              <circle
                class="dot-1"
                cx="4.39"
                cy="4.39"
                r="4.39"
                fill="#d1d3d4"
              />
            </svg>
          </div>
        </div> */}
        {/* <div class="navbar">
        <div class="links">
          <div class="link home">Home</div>
          <div class="link about-me">About Me</div>
          <div class="link process">My Process</div>
          <div class="link portfolio">Portfolio</div>
          <div class="link latest-work">Latest Work</div>
        </div>
        <div class="link-underscore"></div>
        <div class="hamburger-menu"></div>
      </div> */}
        <div className="home-wrapper">
          <Sidebar scrollYPosition={scrollYPosition} mySidebar={mySidebar} />
          <Menu
            currentSection={currentSection}
            setCurrentSection={setCurrentSection}
            currentMedia={currentMedia}
            scrollYPosition={scrollYPosition}
            mySidebar={mySidebar}
          />
        </div>
        <Container
          scrollYPosition={scrollYPosition}
          windowHeight={windowHeight}
          currentSection={currentSection}
          projectView={projectView}
          setProjectView={setProjectView}
        />
      </main>
    </>
  );
}

export default App;
