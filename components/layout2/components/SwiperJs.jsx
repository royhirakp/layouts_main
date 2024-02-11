"use client";

import React, { useRef, useState, useEffect } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Stack, Typography } from "@mui/material";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "./styles.css";
const isBrowser = typeof window !== "undefined";
const SwiperJs = () => {
  let x;
  let y = 30;
  if (isBrowser) {
    if (window.innerWidth < 350) {
      x = 1.2;
      y = 30;
    } else if (window.innerWidth < 550) {
      x = 1.5;
      y = 30;
    } else if (window.innerWidth < 900) {
      x = 2.5;
      y = 30;
    } else {
      x = 5;
      y = 10;
    }
  }

  const [slidesPerView, setSlidesPerView] = useState(x);
  const [space, setSpace] = useState(y);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 350) {
        setSlidesPerView(1.2);
        setSpace(30);
      } else if (window.innerWidth < 550) {
        setSlidesPerView(1.5);
        setSpace(30);
      } else if (window.innerWidth < 900) {
        setSlidesPerView(2.5);
        setSpace(30);
      } else {
        setSlidesPerView(5);
        setSpace(10);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        slidesPerView={slidesPerView}
        initialSlide={0}
        centeredSlides={false}
        spaceBetween={space}
        virtual
        style={{
          height: "100%",
        }}
      >
        {[
          {
            title: "Lorem ipsum dolor sit amet.",
            data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus eum quisquam hic deleniti quasi illum aliquid itaque quaerat dicta, aperiam saepe nisi rem nulla.
            `,
          },
          {
            title: "Lorem ipsum dolor sit amet.",
            data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus eum quisquam hic deleniti quasi illum aliquid itaque quaerat dicta, aperiam saepe nisi rem nulla.`,
          },
          {
            title: "Lorem ipsum dolor sit amet.",
            data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus eum quisquam hic deleniti quasi illum aliquid itaque quaerat dicta, aperiam saepe nisi rem nulla.`,
          },
          {
            title: "Lorem ipsum dolor sit amet.",
            data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus eum quisquam hic deleniti quasi illum aliquid itaque quaerat dicta, aperiam saepe nisi rem nulla.`,
          },
          {
            title: "Lorem ipsum dolor sit amet.",
            data: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ducimus eum quisquam hic deleniti quasi illum aliquid itaque quaerat dicta, aperiam saepe nisi rem nulla.`,
          },
        ].map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <SwiperSlidesComponent item={item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SwiperJs;

const SwiperSlidesComponent = ({ item }) => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        // margin: 1, //

        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
      }}
    >
      <Box
        sx={{
          //   width: "100%",

          // maxWidth: {
          //   xs: "215px",
          //   sm: "215px",
          //   md: "250px",
          // },
          // xs: 0, // Default value for xs
          // xxs: 367,
          // xxxs: 470,
          // swxs: 480,
          // sm: 600,
          // swmd: 700,
          // swlg: 840,
          // md: 900,
          // lg: 1200,
          // xl: 1536,
          minHeight: {
            xs: "250px",
            xxs: "230px",
            xxxs: "200px",
            swxs: "260px",
            sm: "254px",
            swmd: "220px",
            swlg: "200px",
            md: "277px",
            lg: "340px",
            bglg: "300px",
            // xl: "3300px",
            // swlg: 840,
          },
          boxSizing: "border-box",
          border: "2px solid rgba(101, 101, 101, 1)",
          borderRadius: "25px",
          padding: {
            xs: "9px",
            md: "6px",
            lg: "6px",
          },
          paddingTop: {
            xs: "9px",
            md: "6px",
            lg: "10px",
          },
        }}
      >
        <Typography
          // variant="subtitle1"
          sx={{
            textAlign: "center",
            minHeight: {
              xs: "70px",
              md: "85px",
            },
            color: "rgba(255, 255, 255, 1)",
            backgroundColor: "secondary.light",
            borderRadius: "22px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: {
              xs: "1px 5px",
              md: "4px 8px",
            },
            fontSize: {
              xs: "16px",
              md: "18px",
              lg: "20px",
            },
          }}
        >
          {item.title}
        </Typography>
        <Typography
          pt={1}
          textAlign="center"
          variant="body2"
          color="rgba(101, 101, 101, 1)"
          sx={{
            fontSize: {
              xs: "13px",
              // md: "18px",
              lg: "18px",
            },
            lineHeight: {
              xs: "20px",
            },
          }}
        >
          {item.data}
        </Typography>
      </Box>
    </Box>
  );
};
