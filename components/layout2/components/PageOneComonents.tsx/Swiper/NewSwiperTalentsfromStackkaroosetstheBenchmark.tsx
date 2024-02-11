"use client";

import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Box, Stack, Typography } from "@mui/material";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/grid";
// import "swiper/css/pagination";

// import "./testStyle.css";

// import "./styles.css";
import { Grid, Pagination, Virtual } from "swiper/modules";
const isBrowser = typeof window !== "undefined";
const NewSwiperTalentsfromStackkaroosetstheBenchmark = () => {
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
  // const slidesPerView = window.innerWidth > 768 ? 3 : 1.5;
  return (
    <div>
      <Swiper
        slidesPerView={slidesPerView}
        grid={{
          rows: rowsPerView,
          fill: "row",
        }}
        spaceBetween={30}
        //   pagination={{
        //     clickable: true,
        //   }}
        modules={[Grid, Pagination, Virtual]}
        className="mySwiper"
        //   virtual

        //   style={{
        //     height: "350px",
        //   }}
      >
        {[
          {
            data: "While STACKKAROO evaluates many talents from its extensive network, it does more than that. This assessment covers areas such as communication skills, excellent technical know-how & good cultural fit. ",

            title: "Comprehensive Talent Evaluation",
          },
          {
            data: "STACKKAROO reviews these crucial areas in great detail in order to only allow the best and purest talents into the network. This is a tough evaluation where clients are only given specialists, who can deliver.",

            title: "Rigorous Evaluation Process",
          },

          {
            data: "Besides, STACKKAROO is well aware that it requires for talents and client transitions to run smoothly.For this reason, the platform offers complete trainings to all their talents to enable them begin work from day one.",
            title: "Ensure Smooth Talent and Client Transitions",
          },
          {
            data: "Having in mind the rigorous evaluation and thorough training offered by STACKKAROO, clients can be assured of accessing only top-rate talents that are ready to hit the ground running.",
            title: "Unlocking Top-Rate Talents",
            step: "Step 4",
          },
        ].map((item, i) => {
          return (
            <SwiperSlide key={i}>
              <Stack
                direction="column"
                // justifyContent="space-evenly"
                sx={{
                  borderRadius: { xs: "15px", md: "25px", lg: "50px" },
                  padding: { xs: "10px", md: "30px 40px" },
                  minHeight: {
                    // xs: "5000px", // Default value for xs
                    // xxs: 367,
                    // xxxs: 470,
                    // swxs: 480,
                    // sm: 600,
                    // swmd: 700,
                    // swlg: 840,
                    // md: 900,
                    // swllg: 1180,
                    // lg: 1200,
                    // bglg: 1276,
                    xs: "335px",
                    xxs: "335px",
                    xxxs: "250px",
                    // swxs: 480,
                    sm: "370px",
                    swmd: "290px",
                    swlg: "250px",
                    md: "285px",
                  },
                  maxWidth: { xs: "600px" },
                }}
                border="2px solid rgba(101, 101, 101, 1)"
              >
                <Typography
                  sx={{
                    textAlign: {
                      xs: "center",
                      md: "initial",
                    },
                    paddingBottom: 1,
                    // paddingTop: {
                    //   xs: "1%",
                    //   sm: "1%",
                    // },
                    // padding: {
                    //   xs: "2px",
                    //   sm: "5px",
                    // },
                  }}
                  variant="subtitle2"
                >
                  {item.title}
                </Typography>
                <Typography
                  sx={{
                    // border: "1px solid",
                    textAlign: {
                      xs: "center",
                      md: "left",
                    },
                    // paddingTop: {
                    //   xs: 0,
                    //   sm: "2%",
                    // },
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
    </div>
  );
};

export default NewSwiperTalentsfromStackkaroosetstheBenchmark;
