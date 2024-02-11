"use client";
import React from "react";
import { Button, Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
const inActiveStyle = {
  transition: "0.3s",
  textDecoration: "none",
  textTransform: "none",
  disableRipple: "true",
  color: "secondary.light",
  "&:hover": {
    color: "#ff8f9c",
    backgroundColor: "transparent",
  },
};
const activeStyle = {
  disableRipple: "true",
  textDecoration: "none",
  textTransform: "none",
  transition: "0.3s",
  color: "secondary.light",
  "&:hover": {
    backgroundColor: "transparent",
  },
  "&::after": {
    position: "absolute",
    content: '""',
    backgroundColor: "primary.main",
    height: "3px",
    width: "100%",
    bottom: "-3px",
    left: 0,
    transition: "0.3s",
  },
};
const ButtonNavigation = ({
  setSActiveButton,
  activeButton,
}: {
  setSActiveButton: any;
  activeButton: any;
}) => {
  const route = useRouter();
  return (
    <Stack
      direction="row"
      sx={{
        alignItems: "center",
        display: {
          xs: "none",
          sm: "flex",
        },
      }}
    >
      {[
        { name: "Home", path: "home" },
        { name: "About", path: "about" },
        { name: "Study Meterial", path: "studyMeterial" },
        { name: "Courses", path: "courses" },
        { name: "Contacts", path: "contacts" },
        { name: "Classroom", path: "classroom" },
      ].map((item, i) => {
        return (
          <Link
            href={`/layout3/${item.path}`}
            key={i * 0.252}
            onClick={() => {
              setSActiveButton(i);
            }}
            // style={{
            //   color: `${activeButton == i ? "red" : "black"}`,
            // }}
          >
            {/* <a> */}
            <Button
              sx={
                route.pathname == "/layout3/" + item.path
                  ? activeStyle
                  : inActiveStyle
              }
              // style={{ textDecoration: "none" }}
            >
              {item.name}
            </Button>
            {/* </a> */}
          </Link>
        );
      })}
    </Stack>
  );
};

export default ButtonNavigation;
