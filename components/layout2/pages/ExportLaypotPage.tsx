import React from "react";
import PageOneLayout from "./PageOneLayout";
import Hero from "../components/PageOneComonents.tsx/Hero";
import { Box } from "@mui/material";
import WeAreBestBecause from "../components/PageOneComonents.tsx/WeAreBestBecause";
import OurGole from "../components/PageOneComonents.tsx/OurGole";
import OurRigorousHiringProcess from "../components/PageOneComonents.tsx/OurRigorousHiringProcess";
import HireBestTalentsfromStackkaroo from "../components/PageOneComonents.tsx/HireBestTalentsfromStackkaroo";
import BenefitsOfChoosingStackkarooForHirring from "../components/PageOneComonents.tsx/BenefitsOfChoosingStackkarooForHirring";
import TechnologyGiantsPreferIndianTalents from "../components/PageOneComonents.tsx/TechnologyGiantsPreferIndianTalents";
import TreeStructureComponent from "../components/PageOneComonents.tsx/TreeStructureComponent";
import Pricing from "../components/PageOneComonents.tsx/Pricing";

const ExportLayoutPage = () => {
  return (
    <div>
      <PageOneLayout>
        <Hero />
        <Box
          sx={{
            paddingTop: {
              xs: "60px",
              sm: "70px",
              md: "80px",
            },
          }}
        >
          <WeAreBestBecause />
        </Box>
        <Box
          sx={{
            paddingTop: {
              xs: "60px",
              sm: "70px",
              md: "80px",
            },
          }}
        >
          <OurGole />
        </Box>
        <Box
          sx={{
            paddingTop: {
              xs: "60px",
              sm: "70px",
              md: "80px",
            },
          }}
        >
          <OurRigorousHiringProcess />
        </Box>

        <Box
          sx={{
            paddingTop: {
              xs: "60px",
              sm: "70px",
              md: "90px",
            },
          }}
        >
          <HireBestTalentsfromStackkaroo />
        </Box>

        <Box
          sx={{
            paddingTop: {
              xs: "40px",
              sm: "50px",
              md: "80px",
            },
          }}
        >
          <BenefitsOfChoosingStackkarooForHirring />
        </Box>

        <Box
          sx={{
            paddingTop: {
              xs: "40px",
              sm: "60px",
              md: "80px",
            },
          }}
        >
          <TechnologyGiantsPreferIndianTalents />
        </Box>
        <Box
          sx={{
            paddingTop: {
              xs: "40px",
              sm: "70px",
              md: "80px",
            },
          }}
        >
          <TreeStructureComponent />
        </Box>
        <Box
          sx={{
            paddingTop: {
              xs: "50px",
              sm: "70px",
              md: "80px",
            },
          }}
        >
          <Pricing />
        </Box>
      </PageOneLayout>
    </div>
  );
};

export default ExportLayoutPage;
