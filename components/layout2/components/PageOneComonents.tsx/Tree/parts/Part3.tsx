"use client";
import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import Image from "next/image";
import { TreeNodeStyle } from "../Style";
import DownArrow1nst from "../svg/DownArrow1nst";
import DownARrrowLong from "../svg/DownARrrowLong";

const Part3 = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      direction="column"
      width="485px"
      position="relative"
    >
      <Box
        sx={{
          position: "relative",
          bottom: {
            xs: "13px",
            lg: "19px",
          },
          right: "0px",
        }}
      >
        <DownArrow1nst height="110" />
      </Box>
      <Typography
        textAlign="center"
        bgcolor="secondary.light"
        variant="h5"
        color="#ffff"
        sx={{
          ...TreeNodeStyle,
          position: "relative",
          bottom: {
            xs: "16px",
            lg: "20px",
          },
        }}
      >
        Lorem ipsum dolor sit amet.
      </Typography>
      <Box
        sx={{
          position: "relative",
          bottom: {
            xs: "16px",
            lg: "20px",
          },
        }}
      >
        <DownARrrowLong height="160" />
      </Box>
    </Stack>
  );
};

export default Part3;
