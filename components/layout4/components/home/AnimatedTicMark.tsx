import React from "react";

const AnimatedTicMark = () => {
  return (
    <div>
      {/* <input type="checkbox" checked style={{ display: "none" }} /> */}
      {/* 
      <svg width="400" height="400">
        <circle
          fill="none"
          stroke="#68E534"
          stroke-width="10"
          cx="200"
          cy="200"
          r="190"
          className="circle"
          stroke-linecap="round"
          transform="rotate(-90 200 200) "
        />
        <polyline
          fill="none"
          stroke="#68E534"
          stroke-width="14"
          points="81,214 173,284 304,138"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="tick"
        />
      </svg> */}
      <svg width="100" height="100">
        <circle
          fill="none"
          stroke="#437C17"
          strokeWidth="5"
          cx="50"
          cy="50"
          r="47"
          className="circle"
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
        />
        <polyline
          fill="none"
          stroke="#437C17"
          strokeWidth="7"
          points="20,53 35,70 75,30"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="tick"
        />
      </svg>
    </div>
  );
};

export default AnimatedTicMark;
