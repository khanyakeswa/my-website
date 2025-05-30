import React from "react";
import ProjectTile from "../components/ProjectTile";
import { useState, useEffect, useRef } from "react";
import ProjectFilterCategory from "../components/ProjectFilterCategory";
import ProjectModal from "../components/ProjectModal";

function Projects({
  currentSection,
  scrollYPosition,
  windowHeight,
  projectView,
  setProjectView,
  projectSection
}) {
  const [currentProject, setCurrentProject] = useState(0);
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true);
  const projectModalBackdropRef = useRef(null);
  const filterCancelRef = useRef(null);
  const projectGrid = useRef(null);
  const [currentFilter, setCurrentFilter] = useState(null);
  const [renderedProjects, setProjects] = useState([]);

  const filterPosition = () => {
    switch (currentFilter) {
      case "ws":
        return "0";
      case "app":
        return "100%";
      case "cs":
        return "200%";
      case "id":
        return "300%";
      default:
        return "-100%";
    }
  };

  const gridScrollback = () => {
    projectGrid.current.scrollLeft = 0;
  };
  // useEffect(() => {
  //   projectModalBackdropRef.current.addEventListener('click', handleClick);
  //   return () => {
  //     myRef.current.removeEventListener('click', handleClick);
  //   };
  // }, []);

  useEffect(() => {
    // for (let i = 0; i < projectData.length; i++) {
    //   const project = document.getElementById(`project-${i + 1}`);
    //   project.addEventListener("click", () => {
    //     setCurrentProject(i);
    //     setModalOpen(true);
    //   });
    // }
    setProjects(projectData);
    gridScrollback();
    projectGrid.current.addEventListener("scroll", () => {
      if (projectGrid.current.scrollLeft >= 500) {
        setScrollIndicatorVisible(false);
      } else {
        setScrollIndicatorVisible(true);
      }
    });
    filterCancelRef.current.addEventListener("click", () => {
      setCurrentFilter(null);
      setProjects(projectData);
    });
    filterCancelRef.current.addEventListener("hover", () => {
      filterCancelRef.current.style.opacity = "1";
    });
    return () => {
      filterCancelRef.current.removeEventListener("click", () => {
        setCurrentFilter(null);
      });
    };
  }, []);

  const projectData = [
    {
      id: 0,
      title: "Coordi",
      abb: "coordi",
      description: "Co-parenting companion app",
      imgs: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20,
      ],
      hero: "hero.jpg",
      type: ".cs",
      tags: ["UX", "SaaS"],
    },
    {
      id: 1,
      title: "Quest Apparel",
      abb: "quest",
      description: "Boutique streetwear brand and shopping experience",
      imgs: [0, 1, 2, 3, 4, 5, 6],
      hero: "hero.jpg",
      type: ".ws",
      tags: ["UX", "Brand"],
    },
    {
      id: 2,
      title: "True Finals Landing Page",
      abb: "tf",
      description: "Promotional page for a tournament management system",
      imgs: [0],
      hero: "hero.jpg",
      type: ".ws",
      tags: ["</>", "Brand"],
    },
    {
      id: 3,
      title: "Co-Care",
      abb: "cc",
      description: "Covid-19 test appointment scheduling",
      imgs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      hero: "hero.jpg",
      type: ".cs",
      tags: ["UX", "SaaS", "Health"],
    },
    {
      id: 4,
      title: "PeopleSpheres",
      abb: "ps",
      description: "Versatile HR platform",
      imgs: [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20,
      ],
      hero: "hero.jpg",
      type: ".app",
      tags: ["UX", "SaaS"],
    },
    {
      id: 5,
      title: "Meeter",
      abb: "mtr",
      description: "P2P local networking app",
      imgs: [0, 1, 2, 3, 4, 5, 6],
      hero: "hero.jpg",
      type: ".app",
      tags: ["UX", "Interface"],
    },
    {
      id: 6,
      title: "Garmin Watch",
      abb: "gw",
      description: "Modern cycling watch and accompanying interface",
      imgs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
      hero: "hero.jpg",
      type: ".id",
      tags: ["Hardware", "Interface"],
    },
    {
      id: 7,
      title: "Braun KH-2000",
      abb: "kh",
      description: "A contemporary successor to Braun's KH-1000 headset",
      imgs: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      hero: "hero.jpg",
      type: ".id",
      tags: ["Hardware", "Interface"],
    },
  ];
  const projectFilters = [
    {
      id: 1,
      name: "ws",
      text: "Websites",
    },
    {
      id: 2,
      name: "app",
      text: "Apps",
    },
    {
      id: 3,
      name: "cs",
      text: "Case Studies",
    },
    {
      id: 4,
      name: "id",
      text: "ID",
    },
  ];

  const projects = renderedProjects.map((project) => {
    return (
      <ProjectTile
        key={project.id}
        sequence={renderedProjects.indexOf(project)}
        project={project}
        currentProject={currentProject}
        projectData={projectData}
        setCurrentProject={setCurrentProject}
        setProjects={setProjects}
        projectView={projectView}
        setProjectView={setProjectView}
        renderedProjects={renderedProjects}
        scrollYPosition={scrollYPosition}
        windowHeight={windowHeight}
        projectModalBackdropRef={projectModalBackdropRef}
      />
    );
  });

  const filters = projectFilters.map((filter) => {
    return (
      <ProjectFilterCategory
        key={filter.id}
        category={filter.name}
        text={filter.text}
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
        setProjects={setProjects}
        renderedProjects={renderedProjects}
        projectData={projectData}
      />
    );
  });

  return (
    <div id="projects">
      {!projectView ? (
        <></>
      ) : (
        <ProjectModal
          projectModalBackdropRef={projectModalBackdropRef}
          projectData={projectData}
          currentProject={currentProject}
          projectView={projectView}
          setProjectView={setProjectView}
          project={projectData[currentProject]}
        />
      )}
      <div ref={projectSection} id="projects" className="section portfolio">
        <div className="project-header">
          <div className="title">
            Ideas Rooted in Reality,
            <span> Crafted with Care</span>
          </div>
          <div className="content">
            <div
              className="filter-cancel"
              style={{ opacity: `${currentFilter ? 1 : 0}` }}
            >
              <svg
                ref={filterCancelRef}
                style={{ pointerEvents: currentFilter ? "all" : "none" }}
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
            </div>
            <div className="filter-container">
              {filters}
              <div
                style={{ transform: `translateX(${filterPosition()})` }}
                className={
                  currentFilter
                    ? "filter-highlight enabled"
                    : "filter-highlight"
                }
              ></div>
            </div>
          </div>
        </div>
        <div className="scroll-block"></div>
        <div ref={projectGrid} className="projects-grid-wrapper">
          <div className="projects-grid">
            <div className="grid-placeholder"></div>
            {projects}
            <div className="grid-spacer"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
