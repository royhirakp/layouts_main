import { Box, Divider, Stack, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const FooterCopyright = () => {
  return (
    <Box>
      <Box
        sx={{
          paddingTop: {
            xs: 1,
          },
        }}
        pb={3}
        pr={2}
      >
        <Divider />
      </Box>
      <Stack
        pb={3}
        sx={{
          justifyContent: "center",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
        }}
      >
        <Typography variant="body1" textAlign="center">
          Copyright © 2023 Hirak Royyy
          <Typography
            component="span"
            pr={1}
            sx={{ display: { xs: "none", sm: "inline-block" } }}
          >
            |
          </Typography>
        </Typography>
        <Typography textAlign="center">
          Design and Developed by
          <Link
            style={{ paddingLeft: "5px", color: "#437C17" }}
            target="_blank"
            href="https://www.google.com/"
          >
            googleeeeee.com
          </Link>
        </Typography>
      </Stack>
    </Box>
  );
};

{
  /**/
}

export default FooterCopyright;
