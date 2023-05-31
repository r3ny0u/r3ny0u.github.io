import React, { Component } from "react";
import logo from "../profile_picture.png";
import { Link, animateScroll as scroll } from "react-scroll";

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
          <img
            src={logo}
            className="nav-logo"
            alt="Logo"
            onClick={this.scrollToTop}
          />
          {/* <ul className="nav-items"> */}
            <li className="nav-item">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                activeClass="active"
                to="intern"
                spy={true}
                smooth={true}
                duration={500}
              >
                Internship Experience
              </Link>
            </li>
          {/* </ul> */}
        </div>
        <div className="nav-social">
          {/* <ul className="nav-socials"> */}
            <li className="nav-social">
              <a href="https://www.linkedin.com/in/chang-ren-you/">Linkedin</a>
            </li>
            <li className="nav-social">
              <a href="https://github.com/r3ny0u">Github</a>
            </li>
            <li className="nav-social">
              <a href="./components/Chang_Ren_You_CV.pdf" download >Resume</a>
            </li>
          {/* </ul> */}
        </div>
      </nav>
    );
  }
}
