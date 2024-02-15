"use client";
import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
type Anchor = "top" | "left" | "bottom" | "right";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import LogoutIcon from "@mui/icons-material/Logout";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import GradingIcon from "@mui/icons-material/Grading";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import BookIcon from "@mui/icons-material/Book";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import MessageIcon from "@mui/icons-material/Message";
import { useRouter } from "next/router";

const MobileMenuDraweer = ({
  toggleDrawer,
  state,
}: {
  toggleDrawer: any;
  state: any;
}) => {
  const [activeList, setActiveState] = useState(0);
  const list = (anchor: Anchor) => (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "98%",
      }}
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div>
        <Stack direction="row" justifyContent="space-between" pt={2} pb={2}>
          <Box
            pl={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
              margin: "auto",
            }}
          >
            <Image
              src="/dataForLayout2/logo.png"
              alt="logo"
              width={80}
              height={40}
            />
          </Box>
          <IconButton>
            <CloseIcon />
          </IconButton>
        </Stack>

        <LoginPartForMobileDrawer />
        <Divider />
        <ListOfMenu setActiveState={setActiveState} activeList={activeList} />
        <Divider />
      </div>
      {/* logout button */}
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <LogOutButton />
      </Stack>
    </Box>
  );
  return (
    <>
      <div>
        {(["left"] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

export default MobileMenuDraweer;

const LoginPartForMobileDrawer = () => {
  return (
    <Stack>
      {/* xmx */}

      <Box
        sx={{
          display: "block",
          // display: localStorage.getItem("loginStatus") ? "block" : "none",
        }}
      >
        <ListItem
          disablePadding
          sx={
            {
              // background: `${activeList == index ? "#ffff" : "#faffa"}`,
            }
          }
        >
          <ListItemButton sx={{}}>
            <Link
              href={`/layout3/profile`}
              style={{ textDecoration: "none" }}
              onClick={() => {
                // setActiveState(index);
              }}
            >
              <ListItemIcon>
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
              </ListItemIcon>
            </Link>

            <Stack direction="row">
              <Stack direction="column" sx={{}}>
                <Typography variant="subtitle2" color="primary">
                  Hirak Roy
                </Typography>
                <Typography variant="body2" color="secondary">
                  royhirakp@gamil.com
                </Typography>
                <Link href="/layout3/profile">Manage your profile</Link>
              </Stack>
            </Stack>
          </ListItemButton>
        </ListItem>
      </Box>
      {/* sjsjjsjs */}
    </Stack>
  );
};

const LogOutButton = () => {
  return (
    <Link
      href={`/layout3/login`}
      // style={i == activeButton ? activeStyle : inActiveStyle}
      onClick={() => {
        // setSActiveButton(i);
        // localStorage.removeItem("loginStatus");
      }}
    >
      <Button
        sx={{
          disableRipple: "true",
          "&:hover": {
            backgroundColor: "transparent",
          },
        }}
      >
        <LogoutIcon sx={{ color: "primary.main" }} />
        <Typography variant="body1" sx={{ paddingLeft: "5px" }}>
          Logout
        </Typography>
      </Button>
    </Link>
  );
};

const HelpAndFeedBack = ({
  setActiveState,
  activeList,
}: {
  setActiveState: any;
  activeList: any;
}) => {
  const route = useRouter();

  return (
    <List>
      {[
        {
          name: "help",
          icon: <HelpCenterIcon sx={{ color: "primary.main" }} />,
        },
        {
          name: "feedback",
          icon: <MessageIcon sx={{ color: "primary.main" }} />,
        },

        // "contact",
      ].map((text, index) => (
        <Link
          href={`/layout3/${text?.name}`}
          key={index}
          style={{ textDecoration: "none", backgroundColor: "red" }}
          onClick={() => {
            setActiveState(index);
          }}
        >
          <ListItem
            disablePadding
            sx={{
              background: `${
                route.pathname === `/layout3/${text?.name}`
                  ? "#ff7f7f"
                  : "#ffff"
              }`,
            }}
          >
            <ListItemButton>
              <ListItemIcon>{text?.icon}</ListItemIcon>
              <Typography
                variant="body1"
                sx={{
                  color: "#3a3434",

                  fontWeight: 800,
                }}
              >
                {text?.name}
              </Typography>
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

const ListOfMenu = ({
  setActiveState,
  activeList,
}: {
  setActiveState: any;
  activeList: any;
}) => {
  const route = useRouter();
  return (
    <List>
      {[
        {
          name: "Home",
          icon: <HomeIcon sx={{ color: "primary.main" }} />,
          path: "home",
        },
        {
          name: "About",
          icon: <InfoIcon sx={{ color: "primary.main" }} />,
          path: "about",
        },
        {
          name: "Service",
          icon: <HolidayVillageIcon sx={{ color: "primary.main" }} />,
          path: "service",
        },
        {
          name: "Portfolio",
          icon: <GradingIcon sx={{ color: "primary.main" }} />,
          path: "portfolio",
        },

        {
          name: "Blog",
          icon: <BookIcon sx={{ color: "primary.main" }} />,
          path: "blog",
        },
        // "contact",
      ].map((text, index) => (
        <Link
          href={`/layout2/${text?.path}`}
          key={index}
          style={{ textDecoration: "none" }}
          onClick={() => {
            setActiveState(index);
          }}
        >
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon sx={{ color: "#fffff" }}>{text?.icon}</ListItemIcon>
              <Typography
                variant="body1"
                sx={{
                  // color: "secondary.main",
                  color: `${
                    route.pathname == `/layout2/${text?.path}`
                      ? "secondary.light"
                      : "secondary.main"
                  }`,
                  fontWeight: 600,
                }}
              >
                {text?.name}
              </Typography>
            </ListItemButton>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};
