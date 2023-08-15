import React from "react";
import "../App.css";
import { Box, Center, Stack, Flex, IconButton, Spacer } from "@chakra-ui/react";
import logo from "../profile_picture.png";
import { Link as ScrollLink } from "react-scroll";
import { EmailIcon } from "@chakra-ui/icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Sidebar = ({ displayMode }) => {
  return (
    <Stack
      bg="gray.200"
      w={displayMode === "mobile" ? "100vw" : "15vw"}
      h={displayMode === "mobile" ? "10vh" : "100vh"}
      p={4}
      boxShadow="lg"
      direction={displayMode === "mobile" ? "row" : "column"}
    >
      <img className="nav-icon" src={logo}></img>
      <Center className="nav">
        <ScrollLink
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={500}
          offset={-100}
        >
          About Me
        </ScrollLink>
      </Center>
      <Center className="nav">
        <ScrollLink
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          offset={-75}
        >
          Projects
        </ScrollLink>
      </Center>
      <Center className="nav">
        <ScrollLink
          activeClass="active"
          to="interns"
          spy={true}
          smooth={true}
          duration={500}
          offset={-75}
        >
          Internship Experience
        </ScrollLink>
      </Center>
      {displayMode === "pc" && <Spacer />}
      {displayMode === "pc" && (
        <Flex>
          <a href="https://github.com/r3ny0u" target="blank">
            <IconButton
              icon={<FaGithub />}
              size="lg"
              variant="ghost"
              _hover={{ color: "blue.500", cursor: "pointer" }}
              aria-label="Github"
              mt={4}
            />
          </a>
          <Spacer />
          <a href="https://www.linkedin.com/in/chang-ren-you/" target="blank">
            <IconButton
              icon={<FaLinkedin />}
              size="lg"
              variant="ghost"
              _hover={{ color: "blue.500", cursor: "pointer" }}
              aria-label="Linkedin"
              mt={4}
            />
          </a>
          <Spacer />
          <a href={'mailto:"renyou14@gmail.com"'}>
            <IconButton
              icon={<EmailIcon />}
              size="lg"
              variant="ghost"
              _hover={{ color: "blue.500", cursor: "pointer" }}
              aria-label="Email"
              mt={4}
            />
          </a>
        </Flex>
      )}
    </Stack>
  );
};

export default Sidebar;
