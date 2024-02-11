"use client";
import React from "react";
import { Box, Button, IconButton, Stack } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import ContactUsButton from "../meterailUicomponents/ContactUsButton";

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

const MenuButtonAndlOGO = () => {
  return (
    <Stack direction="row">
      <IconButton sx={{ display: { xs: "block", md: "none" } }}>
        <MenuIcon fontSize="large" sx={{ fontSize: "25px" }} />
      </IconButton>
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
    </Stack>
  );
};
const DesktopNavigation = () => {
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
      {["Home", "About", "Service", "Portfolio", "Blog"].map((item, i) => {
        return (
          <Link
            key={i}
            href="/layout2"
            style={{
              fontSize: "18px",
              lineHeight: "27px",
              fontWeight: 600,
              textDecoration: "none",
              color: "#656565",
            }}
          >
            {item}
          </Link>
        );
      })}
    </Box>
  );
};
