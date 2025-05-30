import React, { useState } from "react";
import { useEffect } from "react";
import splash from "../assets/imgs/splash_2.jpg"

function Landing({ scrollYPosition, windowHeight, landingSection }) {
  // let colorDeg = (windowHeight / scrollYPosition) * 360

  return (
    <div ref={landingSection} id="home" className="section top">
      <div className="splash-container">
        <div className="splash-wrapper">
          {/* <video preload="" tabindex="-1" loop="" style="" src="blob:https://vimeo.com/4e0e4578-8621-4f60-9207-f941cb2ed3f9"></video> */}
          <img
            src={splash}
            alt="splash"
            // width={1920}
            // height={1080}
            style={{
              filter: `saturate(${(((scrollYPosition / 4) + windowHeight) / windowHeight) * 100}%)`
            }}
            // style={{
            //   filter: `hue-rotate(${(((scrollYPosition * 20) + windowHeight) / windowHeight)}deg)`
            // }}
          />
        </div>
      </div>
      <div className="header"></div>
    </div>
  );
}

export default Landing;
