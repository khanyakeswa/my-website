import React from "react";
import { useEffect } from "react";

function ProjectImage({ currentProject, project, projectData, img }) {

  return (
    <img
    key={img}
    className="projectImage"
    src={`/imgs/${project.abb}/process${img}.jpg`}
    alt={projectData[currentProject].title}
    width="100%"
    height="auto"
    style={{
      width: "100%",
      height: "auto",
    }}
  />
  );
}

export default ProjectImage;
