"use client";
import React from "react";
import { Stack, Typography, Box } from "@mui/material";

import MainTreeComponent from "./Tree/MainTreeComponent";
const TreeStructureComponent = () => {
  return (
    <Stack>
      <Typography variant="h4" textAlign="center" color="primary" pb={1}>
        Lorem, ipsum.
      </Typography>
      <Typography
        textAlign="center"
        variant="subtitle2"
        color="secondary"
        pb={7}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Typography>
      <MainTreeComponent />
    </Stack>
  );
};

export default TreeStructureComponent;
