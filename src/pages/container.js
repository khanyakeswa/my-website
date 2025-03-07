import React from "react";
import { useEffect } from "react";
import Landing from "./landing";
import Projects from "./projects";
import About from "./about";
import LatestWork from "./latestWork";

function Container({
  currentSection,
  projectView,
  setProjectView,
  scrollYPosition,
  windowHeight,
}) {
  return (
    <>
      <Landing scrollYPosition={scrollYPosition} />
      <Projects
        scrollYPosition={scrollYPosition}
        setProjectView={setProjectView}
        projectView={projectView}
        windowHeight={windowHeight}
      />
      <About/>
      <LatestWork/>
    </>
  );
}

export default Container;
