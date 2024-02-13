"use client";
import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import Image from "next/image";
import JobOpeningButton from "../meterailUicomponents/JobOpeningButton";

const Hero = () => {
  return (
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      <Stack
        sx={{
          background: "linear-gradient(135deg, #ffd6e5, #a6c5e0)",
          borderTopLeftRadius: { xs: "25px", sm: "50px" },
          borderBottomLeftRadius: "50px",
          borderBottomRightRadius: { xs: "50px", md: "0px" },
          borderTopRightRadius: { xs: "25px", sm: "50px", md: "0px" },
          flexDirection: {
            xs: "column",
            md: "row",
          },
          gap: {
            xs: 0,
            md: 2,
          },
        }}
      >
        <TextContent />
        <ImageContainer />
        <ImageContainerForMobile />
      </Stack>
      <BegRoundCircles />
    </Box>
  );
};

export default Hero;
import { Dancing_Script } from "@next/font/google";
const dancing_Script = Dancing_Script({
  subsets: ["latin"],
  weight: ["400"],
});
const TextContent = () => {
  return (
    <Stack
      direction="column"
      flex={1}
      zIndex="5"
      sx={{
        pl: { xs: 3, md: 5 },
        pt: { xs: 8, md: 5 },
        pr: { xs: 3, md: 1 },
        pb: { xs: 0, md: 3 },
      }}
    >
      <Typography
        sx={{
          textAlign: {
            xs: "center",
            md: "initial",
          },
          pb: {
            xs: 1,
            sm: 2,
            md: 3,
          },
        }}
        color="primary"
        variant="h3"
      >
        Lorem ipsum dolor sit.
      </Typography>
      <Typography
        // className="left-animate"
        className={dancing_Script.className}
        // data-scroll
        color="#6b6b6b"
        sx={{
          pb: {
            xs: 3,
            sm: 3,
            md: 3,
          },
          fontWeight: 600,
          fontSize: {
            xs: "20px",
            sm: "22px",
            md: "24px",
            lg: "25px",
          },
          lineHeight: {
            xs: "25px",
            sm: "37.5px",
          },

          textAlign: {
            xs: "center",
            md: "initial",
          },
        }}
      >
        “Lorem ipsum dolor sit amet consectetur adipisicing elit. enim!”
      </Typography>
      <Typography
        variant="body1"
        color="#404040"
        sx={{
          textAlign: {
            xs: "center",
            md: "initial",
          },
          pb: {
            xs: 2,
            sm: 2,
            md: 3,
          },
        }}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,
        ipsum error iusto veniam corporis, dolor aperiam recusandae delectus,
        provident ducimus natus tenetur. Perferendis, laboriosam culpa, esse
        quibusdam fugit molestias voluptatibus beatae sequi quaerat atque sit
        nostrum reiciendis maiores omnis eveniet! Repellat dignissimos mollitia
      </Typography>
      <Stack direction="row" justifyContent="space-between">
        <JobOpeningButton text="Job Opening" onclick={() => {}} />
      </Stack>
    </Stack>
  );
};
const ImageContainer = () => {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          md: "block",
        },
        width: {
          xs: "100%",
          sm: "550px", //500px
          md: "440px",
          lg: "580px",
        },
        height: { xs: "auto", md: "410px", lg: "510px" },
        position: { xs: "relative", md: "initial" },
        top: "5px",
        marginTop: "auto",
        zIndex: "10",
        margin: {
          xs: "0",
          sm: "auto",
          md: "auto 0 0 0",
        },
      }}
    >
      <Image
        src="/dataForLayout2/heroImage.png"
        width={1000}
        height={1000}
        style={{
          width: "100%",
          height: "100%",
        }}
        alt="shkeHand-img"
      />
    </Box>
    // </Box>
  );
};
const ImageContainerForMobile = () => {
  return (
    <Box
      sx={{
        display: {
          xs: "flex",
          md: "none",
        },
        height: {
          xs: "220px",
          xxs: "320px",
          xxxs: "400px",
          sm: "590px",
          md: "auto",
        },
        width: {
          xs: "100%",
          sm: "100%", //500px
          md: "440px",
          lg: "580px",
        },
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        src="/dataForLayout2/heroImage.png"
        width={2000}
        height={2000}
        style={{
          width: "100%",
          height: "100%",
        }}
        alt="shkeHand-img"
      />
    </Box>
  );
};
const BegRoundCircles = () => {
  return (
    <Box>
      <Box
        sx={{
          width: "312px",
          height: "312px",
          borderRadius: "50%",
          border: "50px solid #ffff",
          position: "absolute",
          zIndex: "1",
          top: { xs: "-121px", sm: "-137px", lg: "-188px" },
          right: { xs: "266px", sm: "421px", lg: "531px" },
        }}
      ></Box>
      <Box
        sx={{
          width: "312px",
          height: "312px",
          borderRadius: "50%",
          border: "56px solid #ffff",
          position: "absolute",
          bottom: "456px",
          left: "-100px",
          display: {
            xs: "none",
            lg: "block",
          },
        }}
      ></Box>
      <Box
        sx={{
          width: "312px",
          height: "312px",
          borderRadius: "50%",
          border: "50px solid #ffff",
          position: "absolute",
          top: "504px",
          left: "70px",
          display: {
            xs: "none",
            lg: "block",
          },
        }}
      ></Box>
    </Box>
  );
};
