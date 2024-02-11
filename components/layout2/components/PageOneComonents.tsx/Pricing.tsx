"use client";
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ForumIcon from "@mui/icons-material/Forum";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import SellIcon from "@mui/icons-material/Sell";
const Pricing = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        textAlign="center"
        fontWeight={700}
        color="primary"
        pb={1}
      >
        lorem
      </Typography>
      <Typography
        sx={{
          pb: {
            xs: 3,
            sm: 4,
            md: 6,
          },
        }}
        textAlign="center"
        variant="subtitle2"
        color="secondary"
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </Typography>

      <Stack
        sx={{
          flexDirection: {
            sx: "column",
            sm: "row",
          },
          gap: {
            xs: 2,
            md: 5,
          },
          pb: {
            xs: 2,
            md: 5,
          },
          //   alignItems: "center",
        }}
      >
        {[
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
            title: `            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est!`,
            data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nobis nihil voluptatibus est eum quibusdam quod laudantium perspiciatis consequatur quasi.",
          },

          {
            icon: (
              <ForumIcon
                sx={{
                  fontSize: {
                    xs: "25px",
                    sm: "35px",
                    md: "45px",
                  },
                }}
              />
            ),
            title: `            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est!`,
            data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nobis nihil voluptatibus est eum quibusdam quod laudantium perspiciatis consequatur quasi.",
          },
        ].map((item, i) => {
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
        sx={{
          flexDirection: {
            sx: "column",
            sm: "row",
          },
          gap: {
            xs: 2,
            md: 5,
          },
          //   alignItems: "center",
        }}
      >
        {[
          {
            icon: (
              <MiscellaneousServicesIcon
                sx={{
                  fontSize: {
                    xs: "25px",
                    sm: "35px",
                    md: "45px",
                  },
                }}
              />
            ),
            title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est!`,
            data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, id.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nobis nihil voluptatibus est eum quibusdam quod laudantium perspiciatis consequatur quasi.",
          },

          {
            icon: (
              <AccountBoxIcon
                sx={{
                  fontSize: {
                    xs: "25px",
                    sm: "35px",
                    md: "45px",
                  },
                }}
              />
            ),
            title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Est!`,
            data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, id.Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit nobis nihil voluptatibus est eum quibusdam quod laudantium perspiciatis consequatur quasi.",
          },
        ].map((item, i) => {
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

export default Pricing;

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
      //   border="1px solid"
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
          minWidth: { xs: "35px", md: "50px" },
          height: { xs: "35px", md: "50px" },
        }}
        mr={1}
        // mt={1}
      >
        {icon}
        {/* <Image
          src={icon}
          width={500}
          height={500}
          style={{ width: "100%", height: "100%" }}
          alt="icons"
        /> */}
      </Box>
      <Stack direction="column">
        <Typography
          variant="subtitle2"
          pb={1}
          sx={{ pt: { xs: 0, md: "5px" } }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            maxWidth: "530px",
          }}
        >
          {data}
        </Typography>
      </Stack>
    </Stack>
  );
};
