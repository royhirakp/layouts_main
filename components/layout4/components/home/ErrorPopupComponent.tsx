"use client";
import React from "react";

import { Box, Button, Stack, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
const ErrorPopupComponent = ({
  apiCallErrorStatus,
  setApicallErrorStatus,
}: {
  apiCallErrorStatus: any;
  setApicallErrorStatus: any;
}) => {
  return (
    <Stack
      sx={{
        width: "100%",
        top: "5px",
        zIndex: "900",
        display: `${apiCallErrorStatus ? "flex" : "none"}`,
        translate: "transformY(100px)",
      }}
      direction="row"
      justifyContent="center"
    >
      <Box position="fixed" mt={3} m={5} zIndex={50}>
        <Alert
          severity="error"
          // variant="filled"
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            textAlign: "center",

            ".MuiSvgIcon-root": {
              color: "red",
              margin: {
                xs: "0 auto",
                sm: "0",
              },
            },
            ".MuiPaper-root": {},
            boxShadow: "10px 20px 20px 20px rgba(0, 0, 0, 0.1)",
          }}
        >
          Oops! Something went wrong. Please ensure all required fields are
          filled out before submitting the form. <br />
          <Stack direction="row" justifyContent="center" pt={2}>
            <Button
              className="layout4button"
              variant="text"
              size="small"
              sx={{ color: "#ffff", padding: 1 }}
              onClick={() => {
                setApicallErrorStatus(false);
              }}
            >
              Try Again
            </Button>
          </Stack>
        </Alert>
      </Box>
    </Stack>
    // <Stack
    //   sx={{
    //     width: "100%",
    //     top: "5px",
    //     zIndex: "900",
    //     display: `${!apiCallErrorStatus ? "none" : "flex"}`,
    //     translate: "transformY(100px)",
    //   }}
    //   spacing={2}
    // >
    //   <Box position="fixed" mt={3} m={5} zIndex={50}>
    //     <Alert
    //       severity="error"
    //       sx={{
    //         display: "flex",
    //         flexDirection: {
    //           xs: "column",
    //           sm: "row",
    //         },
    //         fontSize: {
    //           xs: "15px",
    //           sm: "17px",
    //           md: "22px",
    //         },
    //         ".MuiSvgIcon-root": {
    //           color: "#ffff",
    //           margin: {
    //             xs: "0 auto",
    //             sm: "auto 0",
    //           },
    //         },
    //         ".MuiPaper-root": {},
    //         boxShadow: "10px 20px 20px 20px rgba(0, 0, 0, 0.1)",
    //       }}
    //     >
    //       This is an error alert — check it out!
    //     </Alert>
    //   </Box>
    // </Stack>
  );
};

export default ErrorPopupComponent;
