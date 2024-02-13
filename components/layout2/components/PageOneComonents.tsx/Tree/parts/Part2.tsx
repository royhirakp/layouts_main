"use client";
import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import Image from "next/image";
import { TreeNodeStyle } from "../Style";
import DownArrow1nst from "../svg/DownArrow1nst";
import VarticalLine from "../svg/VarticalLine";
import SmallArrowPointingRight from "../svg/SmallArrowPointingRight";

const Part2 = () => {
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
            xs: "6px",
            lg: "9px",
          },
          right: "-1px",
        }}
      >
        <DownArrow1nst height="110" />
      </Box>
      <Typography
        textAlign="center"
        variant="h5"
        sx={{
          ...TreeNodeStyle,
          color: "#ffff",
          bgcolor: "secondary.light",
          padding: {
            xs: "4px 10px",
            sm: "4px 14px",
            md: "5px 15px",
            lg: "10px 20px",
          },
          position: "relative",
          bottom: "10px",
        }}
      >
        Lorem ipsum dolor sit amet consectetur.
      </Typography>
      {/* line for desktop */}
      <Box
        sx={{
          display: {
            xs: "none",
            lg: "block",
          },
          height: {
            xs: "230px",
            lg: "289px",
          },
          width: "4px",
          position: "relative",
          bottom: {
            xs: "12px",
          },
        }}
      >
        <VarticalLine height="300" />
      </Box>
      {/* line for mobile */}

      <Box
        sx={{
          display: {
            xs: "block",
            lg: "none",
          },
          height: {
            xs: "230px",
            lg: "289px",
          },
          width: "4px",
          position: "relative",
          bottom: {
            xs: "12px",
          },
        }}
      >
        <VarticalLine height="240" />
      </Box>
      <ListINthepart />
    </Stack>
  );
};

export default Part2;

const ListINthepart = () => {
  return (
    <Stack
      direction="column"
      gap={3}
      sx={{
        position: "absolute",

        top: {
          xs: "170px",
          sm: "170px",
          md: "165px",
          lg: "172px",
        },
        right: {
          xs: "82px",
          sm: "50px",
          md: "49px",
          lg: "-30px",
        },
      }}
    >
      {[
        "Beginner Level",
        "Intermediate Level",
        "Advance Level",
        "Expert Level",
      ].map((item, i) => {
        return (
          <Stack key={i} direction="row" alignItems="center">
            <Box
              sx={{
                width: "50px",
                height: "25px",
                position: "relative",
                right: "5px",
              }}
            >
              <SmallArrowPointingRight />
            </Box>
            <Typography
              textAlign="center"
              variant="h5"
              sx={{
                ...TreeNodeStyle,
                border: "2px solid",
                borderColor: "secondary.light",
                position: "relative",
                top: "11px",
              }}
            >
              {item}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};
