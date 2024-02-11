"use client";
import React from "react";
import { Stack, Typography } from "@mui/material";

const OurGole = () => {
  return (
    <Stack direction="column">
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight={800}
        color="primary"
        // style={}
        pb={2}
      >
        Our Vision
      </Typography>

      {/* <Typography fontFamily="Poppins">Our Goal</Typography> */}
      <Typography variant="subtitle2" textAlign="center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus et
        praesentium delectus, non ipsa a, laudantium fugiat optio, molestiae
        itaque nihil eos qui? Alias maiores a doloribus at mollitia hic.
      </Typography>
    </Stack>
  );
};

export default OurGole;
