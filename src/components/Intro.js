import React from "react";
import gif from "../sideImg.gif";

export default function Intro() {
  return (
    <div className="intro" id="about">
      <div className="intro-img">
        <img src={gif} alt="gif" />
      </div>
      <div className="intro-content">
          <h2 style={{paddingTop:'10vh'}}>Hello! My name is</h2>
          <p className="intro-name">Chang Ren You</p>
          <h2>I'm an undergraduate at Nanyang Technological University.</h2>
          <h2>Majoring in Computer Engineering.</h2>
      </div>
    </div>
  );
}
