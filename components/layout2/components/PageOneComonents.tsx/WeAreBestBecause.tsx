"use client";
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import SchoolIcon from "@mui/icons-material/School";
import SellIcon from "@mui/icons-material/Sell";
const data1 = [
  {
    icon: (
      <SchoolIcon
        sx={{
          fontSize: {
            xs: "25px",
            sm: "35px",
            md: "45px",
          },
        }}
      />
    ),
    // "mortarboard-svgrepo-com.svg",
    title: "Our Products",
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rem repudiandae recusandae cupiditate earum voluptatem dignissimos fugit sit in, quidem quae labore dolorum, modi autem, consectetur quod incidunt. Nemo, vel fugit. Facere voluptas, .",
  },

  {
    icon: (
      <RocketLaunchIcon
        sx={{
          fontSize: {
            xs: "25px",
            sm: "35px",
            md: "45px",
          },
        }}
      />
    ),

    // "rocket-sharp-svgrepo-com.svg",
    title: "Make us",
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rem repudiandae recusandae cupiditate earum voluptatem dignissimos fugit sit in, quidem quae labore dolorum, modi autem, consectetur quod incidunt. Nemo, vel fugit. Facere voluptas, .",
  },
];
const data2 = [
  {
    icon: (
      <SellIcon
        sx={{
          fontSize: {
            xs: "25px",
            sm: "35px",
            md: "45px",
          },
        }}
      />
    ),

    // "tag-3-svgrepo-com.svg",
    title: "Good things",
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rem repudiandae recusandae cupiditate earum voluptatem dignissimos fugit sit in, quidem quae labore dolorum, modi autem, consectetur quod incidunt. Nemo, vel fugit. Facere voluptas, .",
  },

  {
    icon: (
      <PeopleAltIcon
        fontSize="large"
        sx={{
          fontSize: {
            xs: "25px",
            sm: "35px",
            md: "45px",
          },
        }}
      />
    ),
    // "group-svgrepo-com.svg",
    title: "Our information",
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam rem repudiandae recusandae cupiditate earum voluptatem dignissimos fugit sit in, quidem quae labore dolorum, modi autem, consectetur quod incidunt. Nemo, vel fugit. Facere voluptas, .",
  },
];
const WeAreBestBecause = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight={800}
        color="primary"
        pb={1}
      >
        Lorem ipsum dolor sit.
      </Typography>
      <Typography
        pb={4}
        textAlign="center"
        variant="subtitle2"
        color="secondary"
      >
        Affordable Web Development Company in India
      </Typography>

      <Stack
        // className="right-animate"
        // data-scroll
        sx={{
          flexDirection: {
            sx: "column",
            sm: "row",
          },
          // alignItems: "center",
          pb: {
            xs: 1,
            md: 2,
          },
          gap: {
            xs: 1,
            md: 3,
          },
        }}
      >
        {data1.map((item, i) => {
          return (
            <WeAreBestBecauseCard
              key={i}
              icon={item.icon}
              title={item.title}
              data={item.data}
            />
          );
        })}
      </Stack>
      <Stack
        // className="left-animate"
        // data-scroll
        sx={{
          flexDirection: {
            sx: "column",
            sm: "row",
          },
          // alignItems: "center",
          pb: {
            xs: 1,
            md: 2,
          },
          gap: {
            xs: 1,
            md: 3,
          },
        }}
      >
        {data2.map((item, i) => {
          return (
            <WeAreBestBecauseCard
              key={i}
              icon={item.icon}
              title={item.title}
              data={item.data}
            />
          );
        })}
      </Stack>
    </Box>
  );
};

export default WeAreBestBecause;

const WeAreBestBecauseCard = ({
  icon,
  data,
  title,
}: {
  icon: any;
  data: string;
  title: string;
}) => {
  return (
    <Stack
      direction="row"
      sx={{
        width: {
          xs: "100%",
          sm: "50%",
        },
        pb: {
          xs: 1,
          md: 2,
        },
      }}
    >
      <Box
        sx={{
          minWidth: { xs: "30px", sm: "40px", md: "50px" },
          height: { xs: "30px", sm: "40px", md: "50px" },
        }}
        mr={1}
      >
        {icon}
      </Box>
      <Stack direction="column">
        <Typography variant="subtitle2" pb={1} sx={{ pt: "5px" }}>
          {title}
        </Typography>
        <Typography variant="body2">{data}</Typography>
      </Stack>
    </Stack>
  );
};
