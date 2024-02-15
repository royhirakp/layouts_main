"use client";
import React from "react";
import { Box, Button, IconButton, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import ContactUsButton from "../meterailUicomponents/ContactUsButton";
import MobileMenuDraweer from "./MobileMenuDraweer";
import { useRouter } from "next/router";

const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      gap={4}
    >
      <MenuButtonAndlOGO />
      <Stack direction="row">
        <DesktopNavigation />
        <ContactUsButton onclick={() => {}} text="Contact Us" />
      </Stack>
    </Stack>
  );
};

export default Header;
type Anchor = "top" | "left" | "bottom" | "right";
const MenuButtonAndlOGO = () => {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setState({ ...state, [anchor]: open });
    };
  return (
    <Stack direction="row">
      <IconButton
        sx={{ display: { xs: "block", md: "none" } }}
        onClick={toggleDrawer("left", true)}
      >
        <MenuIcon fontSize="large" sx={{ fontSize: "25px" }} />
      </IconButton>
      <MobileMenuDraweer toggleDrawer={toggleDrawer} state={state} />
      <Link href="/layout2">
        <Box
          sx={{
            width: {
              xs: "115px",
              sm: "155px",
            },
            height: {
              xs: "51px",
              sm: "68px",
            },
          }}
        >
          <Image
            src="/dataForLayout2/logo.png"
            style={{ width: "100%", height: "100%" }}
            width={1200}
            height={1200}
            alt="logo"
          />
        </Box>
      </Link>
    </Stack>
  );
};
const DesktopNavigation = () => {
  const route = useRouter();

  return (
    <Box
      sx={{
        maxWidth: "526px",
        height: "54px",
        gap: {
          xs: "20px",
          lg: "55px",
        },
        display: {
          xs: "none",
          md: "flex",
        },
      }}
      alignItems="center"
    >
      {[
        { name: "Home", path: "home" },
        { name: "About", path: "about" },
        { name: "Service", path: "service" },
        { name: "Portfolio", path: "portfolio" },
        { name: "Blog", path: "blog" },
      ].map((item, i) => {
        console.log(route.pathname);
        console.log(`/layout2/${item.path}`);
        return (
          <Link
            key={i}
            href={`/layout2/${item.path}`}
            style={{
              fontSize: "18px",
              lineHeight: "27px",
              fontWeight: 600,
              textDecoration: "none",
              color: `${
                route.pathname == `/layout2/${item.path}` ? "#fffa12" : "#ffff"
              }`,
            }}
          >
            {item.name}
          </Link>
        );
      })}
    </Box>
  );
};
