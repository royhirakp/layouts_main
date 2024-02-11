"use client";
import React from "react";
import { Stack, Typography, Box } from "@mui/material";
// import SwiperComponentHireBestTalentsfromStackkaroo from "./Swiper/SwiperComponentHireBestTalentsfromStackkaroo";
// import NewSliderHireBestTalents from "@/components/PageOneComonents.tsx/Swiper/NewSliderHireBestTalents";
import TwoCardsColumnSlider from "./Swiper/TwoCardsColumnSlider";
const HireBestTalentsfromStackkaroo = () => {
  return (
    <Stack>
      <Typography variant="h4" textAlign="center" color="primary" pb={1}>
        Lorem ipsum dolor sit amet.
      </Typography>
      <Typography
        textAlign="center"
        variant="subtitle2"
        color="secondary"
        sx={{
          pb: {
            xs: 1,
            sm: 3,
            md: 4,
          },
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </Typography>

      <Box>
        <TwoCardsColumnSlider />
      </Box>
    </Stack>
  );
};

export default HireBestTalentsfromStackkaroo;
