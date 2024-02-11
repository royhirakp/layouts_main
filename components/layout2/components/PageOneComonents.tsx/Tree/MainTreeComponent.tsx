"use client";
import React, { useEffect, useRef } from "react";

import Part1 from "./parts/Part1";
import { Box } from "@mui/material";

const MainTreeComponent = () => {
  const parentRefVartical = useRef<any>(null);

  useEffect(() => {
    if (parentRefVartical.current) {
      const parentDiv = parentRefVartical.current;
      const childDiv = parentDiv.firstChild;
      const scrollPosition = (childDiv.offsetWidth - parentDiv.offsetWidth) / 2;
      parentDiv.scrollLeft = scrollPosition;
    }
  }, []);
  return (
    <Box
      ref={parentRefVartical}
      sx={{
        borderRadius: "15px",
        overflowX: {
          xs: "auto",
          md: "initial",
        },
      }}
    >
      <Box
        sx={{
          width: {
            xs: "880px",
            md: "auto",
          },
        }}
      >
        <Part1 />
      </Box>
    </Box>
  );
};

export default MainTreeComponent;
