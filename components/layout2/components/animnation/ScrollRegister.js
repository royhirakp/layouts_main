"use client";
import React from "react";
import ScrollOut from "scroll-out";
import { Box } from "@mui/material";

const ScrollRegister = () => {
  React.useEffect(() => {
    ScrollOut({
      targets: [".logo", ".left-animate", ".right-animate", ".bottom-animate"],
      threshold: 0.3,
      once: true,
    });
  }, []);
  return (
    <Box
      sx={{
        // position: "absolute",
        inset: 0,
        "& img": {
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 100,
          height: "500px",
        },
      }}
    ></Box>
  );
};

export default ScrollRegister;
