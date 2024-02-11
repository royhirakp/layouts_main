import React from "react";

const VarticalLine = ({ height }: { height: any }) => {
  return (
    <div>
      <svg
        width="10"
        height={height}
        viewBox={`0 0 10 ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="5" y1="0" x2="5" y2={height} stroke="black" strokeWidth="4" />
      </svg>
    </div>
  );
};

export default VarticalLine;
