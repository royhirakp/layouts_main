"use client";
import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import NewSwiperTalentsfromStackkaroosetstheBenchmark from "./Swiper/NewSwiperTalentsfromStackkaroosetstheBenchmark";

const TalentFromStackkaroo = () => {
  return (
    <Stack>
      <Typography variant="h4" textAlign="center" color="primary" pb={1}>
        Talents from Stackkaroo sets the Benchmark
      </Typography>
      <Typography
        textAlign="center"
        variant="subtitle2"
        color="secondary"
        sx={{
          pb: {
            xs: 2,
            sm: 2,
            md: 6,
          },
        }}
      >
        We choose the Best for your Company
      </Typography>

      <Box>
        <NewSwiperTalentsfromStackkaroosetstheBenchmark />
      </Box>
    </Stack>
  );
};

export default TalentFromStackkaroo;
