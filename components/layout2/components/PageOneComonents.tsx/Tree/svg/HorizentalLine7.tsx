import { Box } from "@mui/material";
import React from "react";

const HorizentalLine7 = ({ width, stroke }: { width: any; stroke: any }) => {
  return (
    <Box>
      <svg
        width={width}
        height="10"
        viewBox={`0 0 ${width} 10`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <line
          x1="0"
          y1="5"
          x2={width}
          y2="5"
          stroke="black"
          strokeWidth={stroke}
        />
      </svg>
    </Box>
  );
};

export default HorizentalLine7;
