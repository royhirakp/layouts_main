import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import MaxNoCard from "./MaxNoCard";
import { TreeNodeStyle } from "../Style";
import VarticalLine from "../svg/VarticalLine";

const ItTalentCatagories = () => {
  return (
    <Box position="relative">
      <Stack direction="column">
        <Typography
          variant="h5"
          sx={{
            ...TreeNodeStyle,
            backgroundColor: "primary.main",
            color: "#ffff",
            minWidth: "170px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Lorem, ipsum dolor.
        </Typography>
        {/* line for desktop */}
        <Box
          sx={{
            display: {
              xs: "none",
              lg: "block",
            },
            height: {
              xs: "1340px",
              lg: "1575px",
            },
            width: "4px",
            position: "relative",
            left: "30px",
          }}
        >
          <VarticalLine height="1592" />
        </Box>
        {/* line for mobile */}
        <Box
          sx={{
            display: {
              xs: "block",
              lg: "none",
            },
            height: {
              xs: "1340px",
              lg: "1575px",
            },
            width: "4px",
            position: "relative",
            left: "30px",
          }}
        >
          <VarticalLine height="1252" />
        </Box>
      </Stack>
      <Box
        position="absolute"
        sx={{ top: { xs: "90px", lg: "107px" }, left: "30px" }}
      >
        <MaxNoCard
          content={[
            "Software Engineer",
            "Frontend Developer",
            "Backend Developer",
            "Full Stack Developer",
            "Mobile App Developer",
          ]}
          header="Software Development"
        />
      </Box>
      <Box
        position="absolute"
        sx={{ top: { xs: "480px", lg: "607px" }, left: "30px" }}
      >
        <MaxNoCard
          content={[
            "Data Scientist",
            "Data Analyst",
            "Machine Learning Engineer",
            "Business Intelligence Analyst",
            "Data Engineer",
          ]}
          header="Data Science & Analytics"
        />
      </Box>
      <Box
        position="absolute"
        sx={{ top: { xs: "860px", lg: "1107px" }, left: "30px" }}
      >
        <MaxNoCard
          content={[
            "Information Security Analyst",
            "Ethical Hacker",
            "Security Engineer",
            "Incident Responder",
            "Cryptographer",
          ]}
          header="Cyber Security"
        />
      </Box>
      <Box
        position="absolute"
        sx={{ top: { xs: "1250px", lg: "1600px" }, left: "30px" }}
      >
        <MaxNoCard
          content={[
            "Cloud Architect",
            "Cloud Engineer",
            "DevOps Engineer",
            "Solutions Architect",
            "Cloud Consultant",
          ]}
          header="Cloud Computing"
        />
      </Box>
    </Box>
  );
};

export default ItTalentCatagories;
