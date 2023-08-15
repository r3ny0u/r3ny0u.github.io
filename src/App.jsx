import React, { useState, useEffect } from "react";
import {
  Box,
  ChakraProvider,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import Sidebar from "./components/Sidebar";
import Intro from "./components/Intro.jsx";
import Section from "./components/Section";
import axios from 'axios';

const App = () => {
  const displayMode = useBreakpointValue({ base: "mobile", md: "pc" });

  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    try {
      // const response = await axios.get('/api/projects'); // Replace with your actual API endpoint
      const response = await axios.get('http://localhost:5000/api/projects');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  useEffect(() => {
    fetchProjects(); // Call fetchProjects when the component mounts
  }, []); // Empty dependency array means it will run only once on mount

  const [interns, setInterns] = useState([]);

  const fetchInterns = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/interns');
      setInterns(response.data);
    } catch (error) {
      console.error('Error fetching interns:', error);
    }
  };

  useEffect(() => {
    fetchInterns();
  }, []);

  return (
    <ChakraProvider>
      <Flex>
        <Box position="fixed">
          <Sidebar displayMode={displayMode} />
        </Box>
        <Box
          marginLeft={displayMode === "mobile" ? "0" : "15vw"}
          marginTop={displayMode === "mobile" ? "10vh" : "0"}
        >
          <Intro />
          {projects.map((project) => (
            <Section
              title={project.name}
              subtitle={project.description}
              date={project.date}
              dark={true}
              id="projects"
              key={project._id}
            />
          ))}
          {interns.map((intern) => (
            <Section
              title={intern.name}
              subtitle={intern.description}
              date={intern.date}
              dark={false}
              id="interns"
              key={intern._id}
            />
          ))}
        </Box>
      </Flex>
    </ChakraProvider>
  );
};

export default App;
