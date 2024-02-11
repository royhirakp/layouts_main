import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import Image from "next/image";
const SecondPart = () => {
  return (
    <Stack
      sx={{
        flexDirection: {
          xs: "column",
          md: "row",
        },
      }}
    >
      <Stack
        flex={1}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ImagePart />
      </Stack>
      <Box flex={1} sx={{ display: "flex", justifyContent: "center" }}>
        <Stack
          justifyContent="center"
          maxWidth={500}
          //   sx={{ border: "1px solid" }}
        >
          <StepsForStartJourney />
        </Stack>
      </Box>
    </Stack>
  );
};

export default SecondPart;

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
        src="/dataforLayout3/image.png"
        width={300}
        height={300}
        style={{ width: "100%", height: "100%" }}
      />
    </Box>
  );
};

const StepsForStartJourney = () => {
  return (
    <Box>
      <Typography
        variant="h6"
        fontWeight={700}
        pb={3}
        textAlign="inherit"
        color="secondary.main"
        sx={{
          textAlign: {
            xs: "center",
            md: "inherit",
          },
        }}
      >
        Lorem ipsum dolor sit abet consectetur.
      </Typography>
      <Stack
        direction="column"
        gap={2}
        maxWidth="310px"
        sx={{
          margin: {
            xs: "auto",
            md: "0",
          },
        }}
      >
        {[
          {
            icon: "1",
            title: "sing ui re",
            text: "Lorem ipsum dolor sit amet consectetur",
          },
          {
            icon: "2",
            title: "register or login",
            text: "Lorem ipsum dolor sit amet consectetur",
          },
          {
            icon: "3",
            title: " the Course buy",
            text: "Lorem ipsum  sit amet consectetur dolor",
          },
          {
            icon: "4",
            title: " Learning Start",
            text: " ipsum Lorem consectetur sit amet athe the",
          },
          {
            icon: "5",
            title: "Live class Courses",
            text: "dolor sit amet athe the instructors",
          },
        ].map((item, i) => {
          return (
            <Stack key={i} direction="row">
              <Typography
                variant="body2"
                sx={{
                  width: "30px",
                  height: "30px",
                  lineHeight: "30px",
                  borderRadius: "50%",
                  backgroundColor: "secondary.main",
                  textAlign: "center",
                  color: "secondary.light",
                }}
              >
                {item.icon}
              </Typography>
              <Stack direction="column" color="secondary.main" pl={1}>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  color="secondary.main"
                >
                  {item.title}
                </Typography>
                <Typography variant="body2" color="#333">
                  {item.text}
                </Typography>
              </Stack>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};
