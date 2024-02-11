"use client";
import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import { TreeNodeStyle } from "../Style";
import Part2 from "./Part2";
import Part3 from "./Part3";
import Part4 from "./Part4";
import ItTalentCatagories from "./ItTalentCatagories";
import Non_IT_TalentCategories from "./Non_IT_TalentCategories";
import DownArrow1nst from "../svg/DownArrow1nst";
import Line2nd from "../svg/Line2nd";
const Part1 = () => {
  return (
    <Stack
      className="treeeee"
      sx={{
        // border: "1px solid blue",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: {
          xs: 55,
          md: 0,
        },
        marginRight: {
          xs: 55,
          md: 0,
        },
        paddingTop: {
          xs: 2,
          md: 0,
        },
      }}
    >
      <Typography
        bgcolor="primary.light"
        variant="h5"
        color="#ffff"
        sx={{
          ...TreeNodeStyle,
          width: {
            xs: "125px",
            sm: "165px",
            md: "auto",
          },
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        Lorem, ipsum dolor.
      </Typography>
      {/* arrow */}

      <Box
        sx={{
          position: "relative",
          top: {
            xs: "-8px",
            md: "-13px",
          },
          zIndex: 1,
        }}
      >
        <DownArrow1nst height="100" />
      </Box>

      {/* LIMNE FOR DESKtOP */}
      <Box
        sx={{
          width: { xs: "334px", lg: "482px" },

          height: "4px",
          display: { xs: "none", lg: "inline-block" },
          position: "relative",
          bottom: "22px",
          left: { xs: "15px", lg: "-20px" },
          // border: "1px solid",
        }}
      >
        <Line2nd width="484" stroke="4" />
      </Box>
      {/* LIMNE FOR mOBILE */}
      <Box
        sx={{
          width: { xs: "334px", lg: "482px" },
          height: "4px",

          display: { xs: "inline-block", lg: "none" },
          position: "relative",
          bottom: "15px",
          left: { xs: "15px", lg: "-20px" },
          // border: "1px solid",
        }}
      >
        <Line2nd width="335" stroke="4" />
      </Box>
      {/* add brealkpoint  here for the length */}
      <Box
        sx={{
          position: "relative",
          left: {
            xs: "180px",
            lg: "220px",
          },
          bottom: {
            xs: "9px",
            lg: "10px",
          },
        }}
      >
        <Part2 />
      </Box>
      <Box
        // have do work here add right breakpoint value
        sx={{
          position: "relative",
          left: { xs: "-150px", lg: "-260px" },
          bottom: { xs: "370px", lg: "452px" },
        }}
      >
        <Part3 />
      </Box>
      <Box
        sx={{
          position: "relative",
          left: { xs: "-80px", lg: "-180px" },
          bottom: { xs: "380px", lg: "465px" },
          display: "inline-block",
        }}
      >
        <Part4 />
      </Box>
      <Stack
        direction="row"
        sx={{
          position: "relative",
          right: {
            xs: "350px",
            lg: "360px",
          },
          bottom: { xs: "365px", lg: "385px" },
          // border: "1px solid",
          // width: "50px",
        }}
      >
        <Box
          sx={{
            position: "relative",
            top: {
              xs: "20px",
              lg: "-85px",
            },
            left: "100px",
          }}
        >
          <ItTalentCatagories />
        </Box>
        <Box
          sx={{
            position: "relative",
            top: {
              xs: "20px",
              lg: "-85px",
            },
            left: {
              xs: "320px",
              lg: "355px",
            },
          }}
        >
          <Non_IT_TalentCategories />
        </Box>
      </Stack>
    </Stack>
  );
};

export default Part1;
