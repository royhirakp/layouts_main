import React from "react";

const DownARrrowLong = ({ height }: { height: any }) => {
  return (
    <div>
      <svg
        width="50"
        height={height}
        viewBox={`0 10 50 ${height}`}
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block" }}
      >
        <defs>
          <marker
            id="head"
            orient="auto"
            markerWidth="5"
            markerHeight="6"
            refX="2.5"
            refY="3"
          >
            <path d="M0,0 V6 L4,3 Z" fill="black" />
          </marker>
        </defs>

        <line
          x1="25"
          y1="10"
          x2="25"
          y2={height}
          markerEnd="url(#head)"
          stroke="black"
          strokeWidth="4"
        />
      </svg>
    </div>
  );
};

export default DownARrrowLong;
