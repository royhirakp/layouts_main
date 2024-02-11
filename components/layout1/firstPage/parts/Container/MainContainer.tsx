import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  padding?: string;
  margin?: string;
}

const MainContainer: React.FC<ContainerProps> = ({
  children,
  //   padding = "10px",
  //   margin = "10px",
}) => {
  //   const containerStyle: React.CSSProperties = {
  //     // padding,
  //     // margin,
  //     border: "1px solid #ccc", // Optional border for visualization
  //     borderRadius: "5px", // Optional border-radius for visualization
  //   };

  return (
    <div
      className="px-1 sm:px-3"
      //    style={containerStyle}
      style={{
        maxWidth: "1200px",
        margin: "auto",
      }}
    >
      {children}
    </div>
  );
};

export default MainContainer;
