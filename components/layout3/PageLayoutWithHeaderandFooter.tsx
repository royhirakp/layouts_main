import React from "react";
import Footer from "./components/home/Footer";
import { Box } from "@mui/material";
import Header from "./components/home/Header";
import ThemeProvidor from "./themeProvidor/ThemeProvidor";

const PageLayoutWithHeaderandFooter = ({ children }: { children: any }) => {
  return (
    <ThemeProvidor>
      <Box
        sx={{
          height: "auto",
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* header */}
        <Box
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 99,

            // height: "80px",
          }}
        >
          <Header />
        </Box>
        <Box flex={1}>{children}</Box>
        {/* footer */}
        <Box
          sx={{
            paddingTop: {
              xs: 4,
              sm: 8,
            },
          }}
        >
          <Footer />
        </Box>
      </Box>
    </ThemeProvidor>
  );
};

export default PageLayoutWithHeaderandFooter;
