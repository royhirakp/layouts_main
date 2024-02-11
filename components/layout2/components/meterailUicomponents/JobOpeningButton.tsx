"use client";
import { Button } from "@mui/material";
import React from "react";

const JobOpeningButton = ({ text, onclick }: { text: any; onclick: any }) => {
  return (
    <Button
      color="secondary"
      variant="contained"
      id="jobOpeningButtonFromLayout2"
      sx={{
        minWidth: {
          xs: "160px",
          sm: "180px",
          md: "191px",
        },
        borderRadius: "50px",
        height: {
          xs: "35px",
          sm: "40px",
          md: "45px",
        },
        fontSize: {
          xs: "16px",
          sm: "18px",
          md: "20px",
        },
        lineHeight: "30px",
        textAlign: "center",
        fontWeight: 700,
        color: "#ffff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "none",

        margin: { xs: "auto", md: 0 },
      }}
      onClick={onclick}
    >
      {text}
    </Button>
  );
};

export default JobOpeningButton;
