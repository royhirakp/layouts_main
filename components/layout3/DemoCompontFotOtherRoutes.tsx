import React from "react";
import PageLayoutWithHeaderandFooter from "./PageLayoutWithHeaderandFooter";

const DemoCompontFotOtherRoutes = ({ routeName }: { routeName: string }) => {
  return (
    <div
      style={{
        padding: "170px 0 130px 0",
        textAlign: "center",
      }}
    >
      {routeName}
    </div>
  );
};

export default DemoCompontFotOtherRoutes;
