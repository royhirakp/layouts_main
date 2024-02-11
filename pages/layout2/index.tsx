import React from "react";
import { Inter } from "next/font/google";
import ExportLayoutPage from "@/components/layout2/pages/ExportLaypotPage";
const inter = Inter({ subsets: ["latin"] });

const Layout2 = () => {
  return (
    <div className={inter.className}>
      <ExportLayoutPage />
    </div>
  );
};

export default Layout2;
