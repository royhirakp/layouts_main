import DemoCompontFotOtherRoutes from "@/components/layout3/DemoCompontFotOtherRoutes";
import PageLayoutWithHeaderandFooter from "@/components/layout3/PageLayoutWithHeaderandFooter";
import React from "react";

const index = () => {
  return (
    <div>
      <PageLayoutWithHeaderandFooter>
        <DemoCompontFotOtherRoutes routeName="Class Room Route" />
      </PageLayoutWithHeaderandFooter>
    </div>
  );
};

export default index;
