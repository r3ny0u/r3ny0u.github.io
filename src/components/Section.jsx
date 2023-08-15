import React from "react";
import { Box, Heading, Text, Flex, Center, Grid, GridItem } from "@chakra-ui/react";

export default function Section({ title, subtitle, date, dark, id }) {
  return (
    <Box bg={dark ? "#333" : "white"} color={!dark ? "#333" : "white"} id={id} p={5}>
      <Grid templateColumns='repeat(8, 1fr)' gap={1}>
        <GridItem colSpan={1} display="flex" alignItems="center" justifyContent="center">
          <Text size="xl">{date}</Text>
        </GridItem>
        <GridItem colStart={2} colEnd={9}>
          <Heading size="xl" fontWeight="bold">{title}</Heading>
          <Text size='l' mt={3}>{subtitle}</Text>
        </GridItem>
      </Grid>
    </Box>
  );
}
