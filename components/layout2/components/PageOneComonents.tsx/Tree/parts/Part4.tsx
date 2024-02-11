"use client";
import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import DownARrrowLong from "../svg/DownARrrowLong";
import HorizentalLine7 from "../svg/HorizentalLine7";

const Part4 = () => {
  return (
    <Stack width="555px">
      {/* line for desktop */}
      <Box
        sx={{
          width: {
            xs: "400px",
            lg: "549px",
          },
          height: "4px",
          display: {
            xs: "none",
            lg: "inline-block",
          },
          position: "relative",
          bottom: "17px",
          left: "13px",
        }}
      >
        <HorizentalLine7 stroke="4" width="550" />
      </Box>
      {/* line for mobile */}
      <Box
        sx={{
          width: {
            xs: "400px",
            lg: "549px",
          },
          height: "4px",
          display: {
            xs: "inline-block",
            lg: "none",
          },
          position: "relative",
          bottom: "17px",
          left: "13px",
        }}
      >
        <HorizentalLine7 stroke="4" width="400" />
      </Box>

      <Stack
        direction="row"
        sx={{
          width: "560px",
          position: "relative",
          top: "16px",
        }}
        justifyContent="space-between"
      >
        <Box
          sx={{
            height: { xs: "155px", lg: "190px" },
            width: "25px",
            position: "relative",
            left: {
              xs: "-10px",
              lg: "-12px",
            },
            bottom: {
              xs: "30px",
              lg: "30px",
            },
          }}
        >
          <DownARrrowLong height="200" />
        </Box>
        <Box
          sx={{
            height: { xs: "150px", lg: "190px" },
            width: "25px",
            position: "relative",
            left: {
              xs: "-149px",
              lg: "1px",
            },
            bottom: {
              xs: "30px",
              lg: "30px",
            },
          }}
        >
          <DownARrrowLong height="200" />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Part4;
