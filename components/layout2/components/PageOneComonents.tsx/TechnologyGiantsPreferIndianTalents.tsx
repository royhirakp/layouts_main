"use client";
import React from "react";
import { Stack, Typography, Box } from "@mui/material";
import Image from "next/image";

const TechnologyGiantsPreferIndianTalents = () => {
  return (
    <Stack>
      <Typography variant="h4" textAlign="center" color="primary" pb={1}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
      </Typography>
      <Typography
        textAlign="center"
        variant="subtitle2"
        color="secondary"
        sx={{
          pb: {
            xs: 2,
            sm: 4,
            md: 6,
          },
        }}
      >
        Lorem, ipsum dolor.
      </Typography>
      <Stack
        // border="1px solid"
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
        gap={1}
      >
        <Stack
          flex={1}
          sx={{
            gap: {
              xs: 1,
              sm: 2,
              md: 2,
              lg: 4,
            },
          }}
        >
          {[
            {
              title: "lorem app doo hello",
              data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rem pariatur praesentium repellendus laudantium, nemo quisquam voluptate vero odit sed quos incidunt, nulla asperiores fugiat voluptatum earum veritatis, aliquam omnis.",
            },
            {
              title: "Lorem ipsum dolor sit amet.",
              data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rem pariatur praesentium repellendus laudantium, nemo quisquam voluptate vero odit sed quos incidunt, nulla asperiores fugiat voluptatum earum veritatis, aliquam omnis.",
            },
            {
              title: "Lorem ipsum dolor sit amet.",
              data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rem pariatur praesentium repellendus laudantium, nemo quisquam voluptate vero odit sed quos incidunt, nulla asperiores fugiat voluptatum earum veritatis, aliquam omnis.",
            },
            {
              title: "Loresit amet.",
              data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique rem pariatur praesentium repellendus laudantium, nemo quisquam voluptate vero odit sed quos incidunt, nulla asperiores fugiat voluptatum earum veritatis, aliquam omnis.",
            },
          ].map((item, i) => {
            return (
              <HireBestTalentsfromStackkarooCard
                key={i}
                data={item.data}
                titel={item.title}
              />
            );
          })}
        </Stack>
        <ImageComtaine />
      </Stack>
    </Stack>
  );
};

export default TechnologyGiantsPreferIndianTalents;

const ImageComtaine = () => {
  return (
    <Box
      flex={1}
      margin="auto"
      sx={{
        maxWidth: "650px",
        maxHeight: {
          xs: "704px",
          sm: "604px",
          md: "550px",
          lg: "704px",
        },
        width: {
          xs: "80%",
          md: "30%",
        },
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Image
        src="/dataForLayout2/mobilenew-size.png"
        width={2000}
        height={2000}
        style={{
          width: "100%",
          height: "100%",
          // marginLeft: "auto",
        }}
        alt="image-data"
      />
    </Box>
  );
};

const HireBestTalentsfromStackkarooCard = ({
  titel,
  data,
}: {
  titel: any;
  data: any;
}) => {
  return (
    <Stack>
      <Typography
        variant="subtitle2"
        pb={1}
        sx={{
          textAlign: {
            xs: "center",
            md: "inherit",
          },
        }}
      >
        {titel}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          textAlign: {
            xs: "center",
            md: "inherit",
          },
          paddingBottom: {
            xs: "18px",
            md: "0px",
          },
          width: {
            xs: "100%",
            xxs: "90%",
            sm: "80%",
            md: "100%",
          },
          margin: "auto",
          // border: "1px solid",
        }}
      >
        {data}
      </Typography>
    </Stack>
  );
};
