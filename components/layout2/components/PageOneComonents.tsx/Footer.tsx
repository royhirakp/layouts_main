"use client";
import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  InputAdornment,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Link from "next/link";
import UpdateIcon from "@mui/icons-material/Update";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIcon from "@mui/icons-material/Phone";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import EmailIcon from "@mui/icons-material/Email";
import { TextField } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
const Footer = () => {
  return (
    <>
      <Stack
        sx={{
          flexDirection: {
            xs: "column",
            md: "row",
          },
        }}
      >
        <Stack flex={2} direction="row">
          <Part1 />
          <Part2 />
        </Stack>
        <Stack flex={1.2} direction="column">
          <Part3 />
        </Stack>
      </Stack>

      <PageInformationInFooter />
    </>
  );
};

export default Footer;

const PageInformationInFooter = () => {
  return (
    <Box
      margin="auto"
      sx={{
        maxWidth: "1440px",
      }}
    >
      <Divider sx={{ paddingTop: "25px" }} />
      <Typography
        variant="h6"
        textAlign="center"
        margin="auto"
        sx={{
          padding: "25px 10px",
          fontWeight: 600,
          fontSize: {
            xs: "13px",
            sm: "14px",
            md: "15px",
          },
          lineHeight: {
            xs: "20px",
            md: "22px",
          },
        }}
      >
        Copyright 2023 by hirak roy | using next js
      </Typography>
    </Box>
  );
};

const Part1 = () => {
  return (
    <Stack
      direction="column"
      flex={1}
      sx={{
        pl: {
          xs: "4%",
          sm: "10%",
          md: 0,
        },
      }}
    >
      <Box
        sx={{
          width: { xs: "100px", sm: "136px" },
          height: { xs: "53px", sm: "70px" },
        }}
        // pb={3}
      >
        <Image
          src="/dataForLayout2/logo.png"
          style={{ width: "100%", height: "100%" }}
          width={200}
          height={200}
          alt="logo"
        />
      </Box>
      <Typography variant="caption" pt={1}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus
        aliquam optio laboriosam non quaerat accusantium adipisci maxime
        possimus veritatis harum.
      </Typography>
      <Stack direction="row">
        <IconButton color="secondary">
          <FacebookIcon fontSize="large" sx={{ color: "#1877F2" }} />
        </IconButton>
        <IconButton color="secondary">
          <InstagramIcon fontSize="large" sx={{ color: "#E4405F" }} />
        </IconButton>
        <IconButton color="secondary">
          <LinkedInIcon fontSize="large" sx={{ color: "#0077B5" }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

const Part2 = () => {
  return (
    <Stack
      flex={1}
      direction="column"
      sx={{
        gap: {
          xs: "2px",
          sm: "3px",
        },
        paddingLeft: {
          xs: "20px",
          sm: "200px",
          md: "100px",
        },
      }}
    >
      <Typography
        pb={1}
        color="primary"
        variant="caption"
        sx={{
          fontWeight: 600,
          lineHeight: "21px",
          fontSize: {
            xs: "15px",
            sm: "16px",
          },
        }}
      >
        Quick Links
      </Typography>

      {[
        "About Us",
        "Software Development",
        "Website Development",
        "App Development",
        "UI/UX Design",
        "Digital Marketing",
        "SEO",
      ].map((item, i) => {
        return (
          <Link href="" key={i} className="linkTag">
            <Typography
              variant="caption"
              sx={{
                textDecoration: "underline",
                "&:hover": {
                  textDecoration: "none",
                  color: "red",
                },
              }}
            >
              {item}
            </Typography>
          </Link>
        );
      })}
    </Stack>
  );
};

const Part3 = () => {
  return (
    <Stack
      sx={{
        alignItems: {
          xs: "center",
          md: "initial",
        },
        paddingTop: {
          xs: "0px",
          md: "0",
        },
      }}
    >
      <Typography
        pb={2}
        color="primary"
        variant="caption"
        sx={{
          fontWeight: 600,
          lineHeight: "21px",
          fontSize: {
            xs: "15px",
            sm: "16px",
          },
        }}
      >
        Let's Talk
      </Typography>
      <EnterEmailButton />
      <Stack direction="column" sx={{ paddingTop: "27px", gap: "19px" }}>
        {/* email */}
        <Stack direction="row" alignItems="center">
          <Box
            sx={{
              minWidth: { xs: "20px", sm: "25px" },
              // height: { xs: "20px", sm: "25px" },
            }}
          >
            <EmailIcon fontSize="large" />
          </Box>

          <Link
            className="linkTag"
            style={{ display: "flex" }}
            href="mailto:info@stackkaroo.com?subject=Subject%20of%20the%20email&body=Body%20of%20the%20email"
          >
            <Typography
              variant="caption"
              pl={1}
              sx={{
                textDecoration: "underline",
                "&:hover": {
                  textDecoration: "none",
                  color: "red",
                },
              }}
            >
              royhirakp@gmail.com
            </Typography>
          </Link>
        </Stack>
        {/* oddice address */}
        <Stack direction="row">
          <Box
            sx={{
              minWidth: { xs: "20px", sm: "25px" },
              // height: { xs: "20px", sm: "25px" },
            }}
          >
            <FmdGoodIcon fontSize="large" />
          </Box>

          <Typography variant="caption" pl={1}>
            Office 1: - Lorem ipsum dolor sit amet
            <br /> Office 2: -lorem ipsam dolor India
          </Typography>
        </Stack>
        {/* mobile  */}
        <Stack direction="row">
          <Box
            sx={{
              minWidth: { xs: "20px", sm: "25px" },
              // height: { xs: "20px", sm: "25px" },
            }}
          >
            <PhoneIcon fontSize="large" />
          </Box>

          <Typography variant="caption" pl={1}>
            Office 1:
            <Link
              href="tel:+919002297603"
              className="linkTag"
              style={{
                paddingLeft: "3px",
                textDecoration: "underline",
              }}
            >
              +91 9002297603
            </Link>
            <br /> Office:
            <Link
              className="linkTag"
              href="tel:+919002297603"
              style={{
                paddingLeft: "3px",
                textDecoration: "underline",
              }}
            >
              +91 9002297603
            </Link>
          </Typography>
        </Stack>
        {/* website   */}
        <Stack direction="row" alignItems="center">
          <Box
            sx={{
              minWidth: { xs: "20px", sm: "25px" },
              // height: { xs: "20px", sm: "25px" },
            }}
          >
            <LanguageIcon fontSize="large" />
          </Box>

          <Link
            className="linkTag"
            href="https://www.google.com"
            target="_blank"
            style={{
              display: "flex",
              textDecoration: "none",
            }}
          >
            <Typography
              pl={1}
              variant="caption"
              sx={{
                textDecoration: "underline",
                "&:hover": {
                  textDecoration: "none",
                  color: "red",
                },
              }}
            >
              www.google.com
            </Typography>
          </Link>
        </Stack>
        {/* timming */}
        <Stack direction="row" alignItems="center">
          <Box
            sx={{
              minWidth: { xs: "20px", sm: "25px" },
              // height: { xs: "20px", sm: "25px" },
            }}
          >
            <UpdateIcon fontSize="large" />
          </Box>

          <Typography pl={1} variant="caption">
            Mon to Fri: 9:30 am to 7:30 pm Sat: 9:30 am to 02 pm
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

const EnterEmailButton = () => {
  return (
    <Stack sx={{}} direction="row" alignItems="center">
      <TextField
        className="custom-input"
        sx={{
          fieldset: {
            border: "none",
          },
          backgroundColor: "primary.main",
          borderRadius: "50px",
          ".MuiInputBase-input": {
            color: "#ffff",
            padding: {
              xs: "3px",
              sm: "5px",
            },
            paddingLeft: "50px",
            fontSize: "15px",
            fontWeight: 400,
            marginLeft: "15px",
            // "::placeholder": {
            //   color: "#ffff",
            // },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <PlayCircleIcon
                fontSize="large"
                onClick={() => {
                  console.log("clickedddd");
                  alert("clicked");
                }}
                sx={{ color: "#ffff", position: "relative", left: "15px" }}
              />
            </InputAdornment>
          ),
        }}
        placeholder="Enter email"
      />
    </Stack>
  );
};
