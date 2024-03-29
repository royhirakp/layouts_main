"use client";

import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import Image from "next/image";
import CountUp from "react-countup";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
const FirstPart = () => {
  return (
    <Stack
      sx={{
        flexDirection: {
          xs: "column-reverse",
          md: "row",
        },
      }}
    >
      <Box flex={1} sx={{ display: "flex", justifyContent: "center" }}>
        <Stack justifyContent="center" maxWidth={500}>
          <CourseInfo />
        </Stack>
      </Box>

      <Stack
        flex={1}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImagePart />
      </Stack>
    </Stack>
  );
};

export default FirstPart;

const CourseInfo = () => {
  return (
    <>
      <Typography
        variant="h6"
        fontWeight={700}
        pb={2}
        textAlign="inherit"
        color="secondary.main"
        sx={{
          textAlign: {
            xs: "center",
            md: "inherit",
          },
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores,
        aliquid?
      </Typography>
      <Typography variant="body1" pb={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad magnam
        debitis quibusdam sed eligendi necessitatibus optio veniam laboriosam,
        nostrum neque similique distinctio eum obcaecati atque, nobis asperiores
        recusandae quae ullam?
      </Typography>
      {/* <Stack sx={{ justifyContent: "center" }}> */}
      <Stack
        direction="column"
        gap={1}
        sx={{
          maxWidth: "300px",
          margin: { xs: "auto", md: "0" },
        }}
      >
        {[
          "Lorem  dolor  htsh hsksk s consectetur",
          "Lorem ipsum dolor sit  consectetur",
          "Lorem ipsum dolor sit amet ",
          "Lorem ipsum  sit amet consectetur",
        ].map((item, i) => {
          return (
            <Stack key={i} direction="row">
              <CheckCircleIcon
                sx={{ color: "primary.main" }}
                fontSize="small"
              />
              <Typography pl={1} variant="body1">
                {item}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
      {/* </Stack> */}

      <ServiceCount />
      <Stack
        pt={2}
        direction="row"
        sx={{
          justifyContent: {
            xs: "center",
            md: "start",
          },
        }}
      >
        <Button id="layout3EnrollTodayButton" variant="contained" size="large">
          Enroll Today
        </Button>
      </Stack>
    </>
  );
};

const ImagePart = () => {
  return (
    <Box
      sx={{
        width: {
          xs: "250px",
          sm: "350px",
          md: "400px",
        },
      }}
    >
      <Image
        alt="hitakk"
        src="/dataforLayout3/image1.png"
        width={300}
        height={300}
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
};

const ServiceCount = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      pt={4}
      gap={2}
      sx={{
        maxWidth: "400px",
        minWidth: "225px",
        margin: {
          xs: "0 auto",
          md: "0",
        },
      }}
    >
      {[
        { value: 60, end: 100, Text: "Lorem ipsum dolo consectetur" },
        { value: 40, end: 55, Text: "Lorem  amet consectetur" },
        { value: 900, end: 950, Text: "lorem sessions conducted" },
      ].map((item, i) => {
        return (
          <Box
            key={i}
            sx={{
              textAlign: {
                xs: "center",
                md: "inherit",
              },
            }}
          >
            <Typography
              variant="h6"
              fontSize={20}
              fontWeight={700}
              color="secondary.main"
            >
              {/* {item.value} */}
              <CountUp start={item.value} end={item.end} />
              <span style={{}}>+</span>
            </Typography>
            <Typography variant="body2">{item.Text}</Typography>
          </Box>
        );
      })}
    </Stack>
  );
};
