import React from "react";
import gif from "../sideImg.gif";

export default function Intro() {
  return (
    <div className="intro" id="about">
      <div className="intro-img">
        <img src={gif} alt="gif"/>
      </div>
      <div className="intro-content">
          <span style={{paddingTop: '15vh'}}>Hello! My name is</span>
          <span style={{fontSize: '2em', color: 'grey'}}>Chang Ren You</span>
          <span>I'm an undergraduate at Nanyang Technological University.</span>
          <span>Majoring in Computer Engineering.</span>
      </div>
    </div>
  );
}
