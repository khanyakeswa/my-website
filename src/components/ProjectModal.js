import React from "react";
import { useEffect, useRef } from "react";
// import placeholderImage from "../../public/assets/imgs/project1-preview.jpg";
import ProjectImage from "./ProjectImage";

function ProjectModal({
  projectModalBackdropRef,
  projectData,
  currentProject,
  setProjectView,
  projectView,
  project,
}) {
  const modalRef = useRef(null);
  const myCornerCloseButton = useRef(null);
  const projectIMGs = project.imgs.map((img) => {
    return <ProjectImage key={img} currentProject={currentProject} project={project} projectData={projectData} img={img}/>
});

  useEffect(() => {
    projectModalBackdropRef.current.addEventListener("click", () => {
      setProjectView(false);
    });
    myCornerCloseButton.current.addEventListener("click", () => {
      if (projectView) {
        setProjectView(false);
      }
    });
  }, []);

  return (
    <div ref={modalRef} className="project-modal">
      <div className="content">
        <div className="close-button-corner">
          <svg
            ref={myCornerCloseButton}
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 80 80"
          >
            <g>
              <g id="Layer_1">
                <path
                  className="cls-1"
                  d="M1.7,1.7C3.9-.6,7.5-.6,9.8,1.7l30.2,30.2L70.2,1.7c2.2-2.2,5.8-2.2,8.1,0,2.2,2.2,2.2,5.9,0,8.1l-30.2,30.2,30.2,30.2c2.2,2.2,2.2,5.8,0,8.1-2.2,2.2-5.9,2.2-8.1,0l-30.2-30.2-30.2,30.2c-2.2,2.2-5.8,2.2-8.1,0-2.2-2.2-2.2-5.9,0-8.1l30.2-30.2L1.7,9.8c-2.2-2.2-2.2-5.8,0-8.1Z"
                />
              </g>
            </g>
          </svg>
          <div className="close-button-corner-label">CLOSE</div>
        </div>
        <div className="project-document">{projectIMGs}</div>
      </div>
      <div ref={projectModalBackdropRef} className="backdrop">
        <div className="close-button">{projectData[currentProject].title}</div>
      </div>
    </div>
  );
}

export default ProjectModal;
