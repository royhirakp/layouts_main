import { Box } from "@mui/material";
import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  style: any;
}

const HomeContainer: React.FC<ContainerProps> = ({ children, style }) => {
  return (
    <Box margin="auto" maxWidth={900}>
      {children}
    </Box>
  );
};

export default HomeContainer;
