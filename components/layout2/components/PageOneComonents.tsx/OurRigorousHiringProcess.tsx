"use client";
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import SwiperJs from "../SwiperJs";

const OurRigorousHiringProcess = () => {
  return (
    <Stack>
      <Stack direction="column">
        <Typography variant="h4" textAlign="center" color="primary" pb={1}>
          Lorem ipsum dolor sit amet.
        </Typography>
        <Typography
          textAlign="center"
          variant="subtitle2"
          color="secondary"
          pb={2}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          natus, enim nihil laborum ut quas explicabo odit minima vel similique.
        </Typography>
      </Stack>

      <SwiperJs />
    </Stack>
  );
};

export default OurRigorousHiringProcess;
