import React from "react";
import { useRef, useEffect } from "react";

function AboutMe({ aboutSection }) {
  const tileContainer = useRef();

  return (
    <div ref={aboutSection} id="about" className="section about-me">
      <div className="left">
        <div className="splash"></div>
      </div>
      <div className="right">
        <div id="para-1" className="story">
          Throughout my career, I&apos;ve developed a deep passion for both
          design and technology, leading me to confidently transition from
          designing physical products to digital experiences.
        </div>
        <div id="para-2" className="story">
          With my background as an industrial designer turned product designer,
          I find that my unique combination of skills and experiences make me a
          seamless, multi-faceted fit for any product team.
        </div>
        <div ref={tileContainer} className="skill-tile-container">
          <div
            className="skill-tile-wrapper"
            style={
              {
                // width: `{${tileWidth}px}`
              }
            }
          >
            <span className="skill-title">UXD</span>
            <p className="skill-description">
              Prior exptertise in industrial design gives me a unique
              perspective on user-centered design principles. I&apos;m sensitive
              to composition and visual hierarchy, enabling me to create
              intuitive interfaces.
            </p>
          </div>
          <div className="skill-tile-wrapper">
            <span className="skill-title">Design Strategy</span>
            <p className="skill-description">
              As a design strategist, I have honed my analytical abilities to
              tackle complex technical challenges. I possess a detail-oriented
              mindset, which enables me to identify and resolve issues
              efficiently while maintaining high deliverable quality standards.
            </p>
          </div>
          <div className="skill-tile-wrapper">
            <span className="skill-title">Visual Design</span>
            <p className="skill-description">
              I have extensive experience in improving a product&apos;s visual
              appeal and usability with specialized images, graphics,
              typography, layout, and color theory.
            </p>
          </div>
          <div className="skill-tile-wrapper">
            <span className="skill-title">3D Design</span>
            <p className="skill-description">
              Through side projects and personal interest, I've come to rely on
              a wide array of 3D design software like Cinema 4D, Blender, and
              ThreeJS to enhance the impression of depth and immersion of
              interfaces I create.
            </p>
          </div>
          <div className="skill-tile-wrapper">
            <span className="skill-title">Frontend Engineering</span>
            <p className="skill-description">
              I possess a solid understanding of modern web development
              frameworks, including JavaScript, HTML, CSS, and popular
              frameworks such as React, Tailwind and Boostrap.
            </p>
          </div>
          <div className="skill-tile-wrapper">
            <span className="skill-title">Continuous Learning</span>
            <p className="skill-description">
              Technology is ever-evolving, and I am committed to staying at the
              forefront of industry trends and best practices. I am an avid
              learner who seeks out new opportunities to expand my skill set and
              stay current with emerging design tools.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
