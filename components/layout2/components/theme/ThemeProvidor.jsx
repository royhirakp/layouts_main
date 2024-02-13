"use client";
import { Box, CssBaseline } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Lato } from "@next/font/google";
const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
});

const ThemeProvidor = ({ children }) => {
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        xxs: 367,
        xxxs: 470,
        swxs: 480,
        sm: 600,
        swmd: 700,
        swlg: 840,
        md: 900,
        swllg: 1180,
        lg: 1200,
        bglg: 1276,

        swxl: 1500,
        xl: 1536,
      },
    },
    palette: {
      primary: {
        main: "#203c52",
        light: "rgb(106 99 99)",
      },
      secondary: {
        main: "#b54d4d", // light red
        light: "#14766a80", //light
      },
      background: {
        default: "#dae9e780",
      },
    },
    typography: {
      fontFamily: "inherit",
      body2: {
        fontSize: "14px",
        fontWeight: 500,
        lineHeight: "22px",
        color: "#2c0707",
        "@media (min-width:600px)": {
          fontSize: "14px",
          lineHeight: "23px",
        },
        "@media (min-width:900px)": {
          fontSize: "16px",
          lineHeight: "25px",
        },
        "@media (min-width:1200px)": {
          fontSize: "18px",
          lineHeight: "27px",
        },
      },
      body1: {
        fontWeight: 500,
        fontSize: "16px",

        color: "#2c0707",
        "@media (min-width:600px)": {
          lineHeight: "24px",
          fontSize: "17px",
        },
        "@media (min-width:900px)": {
          lineHeight: "25px",
          fontSize: "17px",
        },
        "@media (min-width:1200px)": {
          lineHeight: "30px",
          fontSize: "19px",
        },
        "@media (min-width:1280px)": {
          lineHeight: "33px",
          fontSize: "22px",
        },
      },
      subtitle2: {
        fontSize: "18px",
        fontWeight: 600,
        lineHeight: "28px",
        color: "#ff007f",
        "@media (min-width:600px)": {
          lineHeight: "28px",
          fontSize: "18px",
        },
        "@media (min-width:900px)": {
          lineHeight: "30px",
          fontSize: "20px",
        },
        "@media (min-width:1200px)": {
          lineHeight: "33px",
          fontSize: "22px",
        },
      },
      subtitle1: {
        fontSize: "17px",
        lineHeight: "25px",
        fontWeight: 700,
        color: "#000",
        "@media (min-width:600px)": {
          lineHeight: "25px",
          fontSize: "17px",
        },
        "@media (min-width:900px)": {
          lineHeight: "25px",
          fontSize: "18px",
        },

        "@media (min-width:1200px)": {
          lineHeight: "30px",
          fontSize: "20px",
        },
      },
      h6: {
        fontSize: "26px",
        fontWeight: 700,
        lineHeight: "35px",
        "@media (min-width:600px)": {
          fontSize: "27px",
          lineHeight: "35px",
        },
        "@media (min-width:900px)": {
          fontSize: "28px",
          lineHeight: "40px",
        },
        "@media (min-width:1200px)": {
          fontSize: "30px",
          lineHeight: "45px",
        },
      },
      h4: {
        fontSize: "27px",
        fontWeight: 700,
        lineHeight: "35px",
        "@media (min-width:600px)": {
          fontSize: "27px",
          lineHeight: "35px",
        },
        "@media (min-width:900px)": {
          fontSize: "28px",
          lineHeight: "35px",
        },
        "@media (min-width:1200px)": {
          fontSize: "30px",
          lineHeight: "45px",
        },
      },
      h3: {
        fontWeight: 800,
        fontSize: "30px",
        lineHeight: "30px",
        "@media (min-width:600px)": {
          fontSize: "30px",
          lineHeight: "30px",
        },
        "@media (min-width:900px)": {
          fontSize: "34px",
          lineHeight: "40px",
        },
        "@media (min-width:1200px)": {
          lineHeight: "60px",
          fontSize: "36px",
        },
        "@media (min-width:1280px)": {
          lineHeight: "60px",
          fontSize: "40px",
        },
      },
      caption: {
        fontWeight: 500,
        fontSize: "12px",
        lineHeight: "19px",
        color: "#272626",
        "@media (min-width:600px)": {
          fontSize: "12px",
          lineHeight: "19px",
        },
        "@media (min-width:900px)": {
          fontSize: "13px",
          lineHeight: "20px",
        },
        "@media (min-width:1200px)": {
          lineHeight: "21px",
          fontSize: "14px",
        },
      },
      h5: {
        fontWeight: 400,
        fontSize: "10px",
        lineHeight: "19px",
        color: "rgba(101, 101, 101, 1)",
        "@media (min-width:600px)": {
          fontSize: "13px",
          lineHeight: "19px",
          fontWeight: 400,
        },
        "@media (min-width:900px)": {
          fontSize: "13px",
          lineHeight: "20px",
          fontWeight: 500,
        },
        "@media (min-width:1200px)": {
          lineHeight: "30px",
          fontSize: "20px",
          fontWeight: 600,
        },
      },
    },
    components: {
      MuiButtonBase: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiButtonGroup: {
        defaultProps: {
          disableRipple: true,
        },
      },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: "#741111",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            backgroundColor: "#476232",
            padding: "10px 30px",
            "&:hover": {
              backgroundColor: "#2d3f20",
            },
            textTransform: "none",
            color: "#ffff",
          },
        },
      },
    },
  });
  return (
    <Box className={lato.className}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Box>
  );
};

export default ThemeProvidor;
