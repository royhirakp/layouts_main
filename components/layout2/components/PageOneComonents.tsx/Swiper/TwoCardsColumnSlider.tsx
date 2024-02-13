"use client";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Stack, Typography } from "@mui/material";

import { Grid, Pagination, Virtual } from "swiper/modules";
const isBrowser = typeof window !== "undefined";
const TwoCardsColumnSlider = () => {
  let x;
  let y = 1;
  if (isBrowser) {
    if (window.innerWidth < 350) {
      x = 1.2;
    } else if (window.innerWidth < 600) {
      x = 1.5;
    } else if (window.innerWidth < 900) {
      x = 2.5;
    } else {
      x = 2;
      y = 2;
    }
  }
  const [slidesPerView, setSlidesPerView] = useState(x);
  const [rowsPerView, setrowsPerView] = useState(y);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 350) {
        setSlidesPerView(1.2);
        setrowsPerView(1);
      } else if (window.innerWidth < 600) {
        setSlidesPerView(1.5);
        setrowsPerView(1);
      } else if (window.innerWidth < 900) {
        setSlidesPerView(2.5);
        setrowsPerView(1);
      } else {
        setSlidesPerView(2);
        setrowsPerView(2);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Box sx={{ maxWidth: "1050px", margin: "auto" }}>
      <Swiper
        slidesPerView={slidesPerView}
        grid={{
          rows: rowsPerView,
          fill: "row",
        }}
        spaceBetween={30}
        modules={[Grid, Pagination, Virtual]}
        className="mySwiper"
      >
        {[
          {
            step: "Step I",
            title: "Lorem ipsum dolor sit amet.",
            data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus eum quisquam hic deleniti quasi illum aliquid itaque quaerat dicta, aperiam saepe nisi rem nulla.
  `,
          },
          {
            step: "Step II",
            title: "Lorem ipsum dolor sit amet.",
            data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus eum quisquam hic deleniti quasi illum aliquid itaque quaerat dicta, aperiam saepe nisi rem nulla.`,
          },
          {
            step: "Step III",
            title: "Lorem ipsum dolor sit amet.",
            data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus eum quisquam hic deleniti quasi illum aliquid itaque quaerat dicta, aperiam saepe nisi rem nulla.`,
          },
          {
            step: "Step IV",
            title: "Lorem ipsum dolor sit amet.",
            data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus eum quisquam hic deleniti quasi illum aliquid itaque quaerat dicta, aperiam saepe nisi rem nulla.`,
          },
        ].map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <Stack
                direction="column"
                gap={2}
                sx={{
                  borderRadius: { xs: "15px", md: "25px" },
                  padding: { xs: "10px", md: "20px" },
                  minHeight: {
                    xs: "300px",
                    xxs: "300px",
                    xxxs: "250px",
                    sm: "340px",
                    swmd: "290px",
                    md: "250px",
                  },
                }}
                border="2px solid rgba(101, 101, 101, 1)"
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "center",
                      md: "flex-start",
                    },
                  }}
                >
                  <Typography
                    sx={{
                      backgroundColor: "secondary.light",
                      borderRadius: "15px",
                      padding: {
                        xs: "7px 15px",
                        sm: "10px 25px",
                      },
                      color: "rgba(255, 255, 255, 1)",
                    }}
                    variant="subtitle1"
                    textAlign="center"
                  >
                    {item.step}
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    textAlign: {
                      xs: "center",
                      md: "initial",
                    },
                  }}
                  variant="subtitle2"
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    textAlign: {
                      xs: "center",
                      md: "left",
                    },
                  }}
                  variant="body2"
                >
                  {item.data}
                </Typography>
              </Stack>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default TwoCardsColumnSlider;
