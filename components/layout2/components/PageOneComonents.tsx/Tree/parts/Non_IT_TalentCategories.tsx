import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import MaxNoCard from "./MaxNoCard";
import { TreeNodeStyle } from "../Style";
import VarticalLine from "../svg/VarticalLine";

const Non_IT_TalentCategories = () => {
  return (
    <Box position="relative">
      <Stack direction="column">
        <Typography
          variant="h5"
          sx={{
            ...TreeNodeStyle,
            backgroundColor: "primary.main",
            color: "#ffff",
            minWidth: "200px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Non-IT Talent Categories
        </Typography>
        {/* line for desktop */}
        <Box
          sx={{
            display: {
              xs: "none",
              lg: "block",
            },
            height: {
              xs: "1240px",
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
              xs: "1240px",
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
            "Sales Representative",
            "Marketing Manager",
            "Digital Marketing Specialist",
            "Brand Manager",
            "Advertising Executive",
          ]}
          header="Sales & Marketing"
        />
      </Box>
      <Box
        position="absolute"
        sx={{ top: { xs: "480px", lg: "607px" }, left: "30px" }}
      >
        <MaxNoCard
          content={[
            "Accountant",
            "Financial Analyst",
            "Auditor",
            "Tax Consultant",
            "Treasury Manager",
          ]}
          header="Finance & Accounting"
        />
      </Box>
      <Box
        position="absolute"
        sx={{ top: { xs: "860px", lg: "1107px" }, left: "30px" }}
      >
        <MaxNoCard
          content={[
            "HR Manager",
            "Recruitment Specialist",
            "Training and Development Manager",
            "Compensation and Benefits Analyst",
            "Employee Relations Manager",
          ]}
          header="Human Resources"
        />
      </Box>
      <Box
        position="absolute"
        sx={{ top: { xs: "1250px", lg: "1600px" }, left: "30px" }}
      >
        <MaxNoCard
          content={[
            "Operations Manager",
            "Supply Chain Analyst",
            "Logistics Coordinator",
            "Inventory Manager",
            "Procurement Specialist",
          ]}
          header="Operations & Logistics"
        />
      </Box>
    </Box>
  );
};

export default Non_IT_TalentCategories;
