import { Box } from "@mui/material";
import React from "react";
import Hero from "./components/home/Hero";
import Course from "./components/home/Course";
import OurFeaturs from "./components/home/OurFeaturs";
import StartJourney from "./components/home/StartJourney";

const ExportMainLayout3 = () => {
  return (
    <>
      <Box>
        <Hero />
      </Box>

      <Course />

      <Box pt={9}>
        <OurFeaturs />
      </Box>
      <Box pt={15}>
        <StartJourney />
      </Box>
    </>
  );
};

export default ExportMainLayout3;
