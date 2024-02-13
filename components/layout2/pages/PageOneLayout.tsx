"use client";
import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import PageOneContainer from "../container/PageOneContainer";
import Header from "../components/PageOneComonents.tsx/Header";
import Footer from "../components/PageOneComonents.tsx/Footer";
import ThemeProvider from "../components/theme/ThemeProvidor";

const PageOneLayout = ({ children }: { children: any }) => {
  const [scrollStartStatus, setScrollStartStatus] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollStartStatus(true);
      } else {
        setScrollStartStatus(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      {/* animation */}
      {/* <ScrollRegister /> */}
      <ThemeProvider>
        <Stack direction="column" minHeight="100vh">
          <Box
            sx={{
              position: "fixed",
              width: "100%",
              background: `${
                scrollStartStatus
                  ? "linear-gradient(95deg, #FFD6E5, #d94162, #C479C4)"
                  : "linear-gradient(45deg, #d94162, #FF69B4, #BA55D3)"
              }`,
              transition: "background 0.5s ease",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              zIndex: 12,
              padding: {
                xs: "15px 0",
                sm: "20px 0",
                md: "25px 0",
              },
            }}
          >
            <PageOneContainer style={{}}>
              <Header />
            </PageOneContainer>
          </Box>

          <Box flex={1} mt={18}>
            <PageOneContainer style={{}}>{children}</PageOneContainer>
          </Box>

          <Box
            sx={{
              paddingTop: {
                xs: "40px",
                sm: "60px",
                md: "80px",
              },
            }}
          >
            <PageOneContainer style={{}}>
              <Footer />
            </PageOneContainer>
          </Box>
        </Stack>
      </ThemeProvider>
    </Box>
  );
};

export default PageOneLayout;
