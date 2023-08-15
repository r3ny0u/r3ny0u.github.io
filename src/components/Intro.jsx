import React from "react";
import { Box, Heading, Text, Center, Grid, Spacer, GridItem } from "@chakra-ui/react";
import gif from "../sideImg.gif";

const Intro = () => {
  return (
    <Grid className="intro" templateColumns='repeat(5, 1fr)' gap={1}>
      <GridItem className="intro-text" colSpan={3} id="about">
          <h2>
            Hello World! I'm
          </h2>
          <h1>
            Chang Ren You
          </h1>
          <p>
            An undergraduate at Nanyang Technological University
          </p>
          <p>
            Majoring in Computer Engineering
          </p>
      </GridItem>
      <GridItem colStart={4} colSpan={2} className="intro-img">
        <img src={gif} alt="gif"></img>
      </GridItem>
    </Grid>
  );
};

export default Intro;
