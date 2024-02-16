import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  style: any;
}

const HomeContainer: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <Box
      margin="auto"
      maxWidth={900}
      sx={{
        background:
          "linear-gradient(to bottom right,rgba(233, 231, 161, 0.7), rgba(199, 216, 207, 0.7), rgba(161, 217, 247, 0.7), rgb(239 227 235 / 70%), rgba(247, 217, 161, 0.7), rgba(161, 247, 217, 0.7), rgb(230 206 243 / 70%))",
        borderRadius: "15px",
      }}
    >
      <Box
        sx={{
          m: {
            xs: 0,
            sm: 1,
            md: 2,
          },
          p: {
            xs: 0,
            sm: 1,
            md: 3,
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default HomeContainer;
