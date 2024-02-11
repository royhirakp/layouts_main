"use client";
import { Box, Divider, Typography } from "@mui/material";
import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  style: any;
}

const PageOneContainer: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <Box sx={{}}>
      <Box
        margin="auto"
        sx={{
          maxWidth: "1440px",
          padding: {
            xs: "0 10px",
            sm: "0 20px",
            md: "0 20px",
            lg: "0 80px",
            xl: "0 80px",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageOneContainer;
