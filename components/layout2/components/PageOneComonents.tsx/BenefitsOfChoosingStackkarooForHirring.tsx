"use client";
import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import Image from "next/image";

const BenefitsOfChoosingStackkarooForHirring = () => {
  return (
    <Stack>
      <Typography variant="h4" textAlign="center" color="primary" pb={1}>
        Lorem ipsum dolor sit amet consectetur
      </Typography>
      <Typography
        textAlign="center"
        variant="subtitle2"
        color="secondary"
        sx={{
          pb: {
            xs: 4,
            sm: 4,
            md: 6,
          },
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: {
            xs: "baseline",
            sm: "center",
            md: "center",
            // md: "initial",
          },
          gap: { xs: "20px", md: "35px" },
          // border: "1px solid",
        }}
      >
        <ImageComtaine />
        <ListOfDetails />
      </Stack>
    </Stack>
  );
};

export default BenefitsOfChoosingStackkarooForHirring;

const ImageComtaine = () => {
  return (
    <Box
      sx={{
        maxWidth: "863px",

        width: { xs: "100%", md: "50%" },
        height: { xs: "100%" },

        pb: {
          xs: 5,
          md: 0,
        },
      }}
    >
      <Image
        src="/dataForLayout2/robote-min.jpg"
        width={1000}
        height={1000}
        style={{
          width: "100%",
          height: "100%",
        }}
        alt="data-image"
      />
    </Box>
  );
};
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const ListOfDetails = () => {
  return (
    <ul
      style={{
        listStyleType: "none",
      }}
    >
      {[
        "Lorem ipsum dolor sit amet",
        "Easily Replace Lorem  dolor sit amet",
        "IT Support Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet Availability ",
        " Cost Advantage Lorem ipsum dolor sit y ",
        "Double the  Lorem ipsum  sit aetlity ",
        "Double the  Lorem ipsum  sit aetlity ",
        "Double the  Fast and Seamless Hiring",
      ].map((item, i) => {
        return (
          <li key={i} style={{ display: "flex", paddingBottom: "7px" }}>
            <Box
              sx={{
                // minWidth: { xs: "30px", sm: "32px", md: "35px" },
                // height: { xs: "30px", sm: "32px", md: "35px" },
                pr: {
                  xs: "10px",
                  md: "12px",
                },
              }}
            >
              <CheckCircleIcon
                fontSize="large"
                sx={{ color: "primary.main" }}
              />
            </Box>
            <Typography
              sx={{ display: "flex", alignItems: "center", color: "#000" }}
              variant="body2"
            >
              {item}
            </Typography>
          </li>
        );
      })}
    </ul>
  );
};
