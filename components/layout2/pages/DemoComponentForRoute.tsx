import React from "react";
import PageOneLayout from "./PageOneLayout";
import { Typography } from "@mui/material";

const DemoComponentForRoute = ({ routeName }: { routeName: string }) => {
  return (
    <div>
      <PageOneLayout>
        <Typography variant="h2" textAlign="center" pt={10}>
          {routeName}
        </Typography>
      </PageOneLayout>
    </div>
  );
};

export default DemoComponentForRoute;
