import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { TreeNodeStyle } from "../Style";
import SmallArrowPointingRight from "../svg/SmallArrowPointingRight";
import VarticalLine from "../svg/VarticalLine";
const MaxNoCard = ({ header, content }: { header: any; content: string[] }) => {
  return (
    <Stack
      sx={{
        position: "relative",

        minWidth: { xs: "300px", lg: "500px" },
      }}
    >
      <Stack direction="row" alignItems="center">
        <Box sx={{ width: "50px", height: "25px" }}>
          <SmallArrowPointingRight />
        </Box>
        <Typography
          textAlign="center"
          variant="h5"
          sx={{
            ...TreeNodeStyle,
            border: "2px solid",
            borderColor: "primary.main",
            position: "relative",
            top: "12px",
          }}
        >
          {header}
        </Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{ position: "relative", left: "90px" }}
        maxWidth={100}
        // border="1px solid red"
      >
        {/*line  for desktop */}

        <Box
          sx={{
            display: {
              xs: "none",
              md: "none",
              lg: "block",
            },
            height: {
              xs: "278px",
              md: "290px",
              lg: "380px",
            },
            width: "4px",
            position: "relative",
            top: "10px",
          }}
        >
          <VarticalLine height="377" />
        </Box>
        {/*line  for tablet */}

        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
              lg: "none",
            },
            height: {
              xs: "278px",
              md: "290px",
              lg: "380px",
            },
            width: "4px",
            position: "relative",
            top: "10px",
          }}
        >
          <VarticalLine height="287" />
        </Box>
        {/*line  for mobile */}
        <Box
          sx={{
            display: {
              xs: "block",
              md: "none",
              lg: "none",
            },
            height: {
              xs: "278px",
              md: "290px",
              lg: "380px",
            },
            width: "4px",
            position: "relative",
            top: "10px",
          }}
        >
          <VarticalLine height="273" />
        </Box>
        <ListINthepart content={content} />
      </Stack>
    </Stack>
  );
};

export default MaxNoCard;

const ListINthepart = ({ content }: { content: string[] }) => {
  return (
    <Stack
      direction="column"
      gap={3}
      sx={{
        position: "absolute",
        top: { xs: "34px", md: "35px" },
        // right: "-55px",
        // border: "1px solid",
        width: {
          xs: "350px",
          lg: "500px",
        },
      }}
    >
      {content.map((item, i) => {
        return (
          <Stack key={i} direction="row" alignItems="center">
            <Box sx={{ width: "50px", height: "25px" }}>
              <SmallArrowPointingRight />
            </Box>
            <Typography
              textAlign="center"
              // bgcolor="secondary.light"
              variant="h5"
              // color="#ffff"
              // sx={{
              //   border: "2px solid",
              //   borderColor: "secondary.light",
              //   // width: "482px",
              //   height: "50px",
              //   borderRadius: "50px",
              //   justifyContent: "center",
              //   alignItems: "center",
              //   display: "flex",
              //   padding: "0 25px",
              // }}
              sx={{
                ...TreeNodeStyle,
                border: "2px solid",
                borderColor: "secondary.light",
                position: "relative",
                top: "10px",
              }}
            >
              {item}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
};
