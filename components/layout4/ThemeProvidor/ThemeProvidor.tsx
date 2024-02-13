"use client";
import { Box, CssBaseline } from "@mui/material";
import React, { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
interface ContainerProps {
  children: ReactNode;
}
import { Lato, Dancing_Script } from "@next/font/google";
const dancing_Script = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
});
const lato = Lato({
  subsets: ["latin"],
  weight: ["400"],
});
const ThemeProvidor: React.FC<ContainerProps> = ({ children }) => {
  const theme = createTheme({
    typography: {
      fontFamily: "inherit",
      subtitle1: {
        color: "#6c032e",
        fontSize: "1.3rem",
        fontWeight: 700,
        "@media (min-width:600px)": {
          fontSize: "1.3rem",
        },
        "@media (min-width:960px)": {
          fontSize: "1.5rem",
        },
        "@media (min-width:1280px)": {
          fontSize: "1.5rem",
        },
      },
      h5: {
        color: "#cd0000",
        textDecoration: "underline",
        marginBottom: "0.5rem",
        fontSize: "1.7rem",
        fontWeight: 700,
        "@media (min-width:600px)": {
          fontSize: "1.7rem",
        },
        "@media (min-width:960px)": {
          fontSize: "1.9rem",
        },
        "@media (min-width:1280px)": {
          fontSize: "2rem",
        },
      },
    },
    palette: {
      primary: {
        main: "#6c032e",
        light: "#6c032e",
        dark: "#6c032e",
      },

      background: {
        default: "#eae8eb",
        paper: "#fffafb",
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
            color: "#6c032e",
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
      MuiSelect: {
        styleOverrides: {
          root: {
            padding: "0px",
            "@media (min-width:600px)": {
              fontSize: "15px",
            },
            "@media (min-width:960px)": {
              fontSize: "16px",
            },
            "@media (min-width:1280px)": {
              fontSize: "18px",
            },
            borderRadius: "7px",
            // height: "40px",

            ".MuiInputBase-input": {
              padding: "15px",
            },

            fieldset: {
              border: "1px solid #437C17",
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            borderRadius: "7px",

            ".MuiInputBase-root": {
              fontSize: "20px",
              height: "45px",
            },
            fieldset: {
              border: "1px solid #437C17",
              padding: 0,
            },
          },
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: {
            padding: "0 0 0 12px",
            position: "relative",
            top: 0,
            margin: 0,
            fontSize: "1.rem",
            "@media (min-width:600px)": {
              fontSize: "1.1rem",
            },
            "@media (min-width:960px)": {
              fontSize: "1.3rem",
            },
            "@media (min-width:1280px)": {
              fontSize: "1.4rem",
            },
          },
        },
      },
    },
  });
  // console.log("lato.className,====", lato.className);
  return (
    <Box
      className={`
      ${lato.className} ${dancing_Script.className}
    `}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Box>
  );
};

export default ThemeProvidor;
