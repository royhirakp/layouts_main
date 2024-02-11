import React from "react";
import BottomSlider from "./BottomSlider/BottomSlider";
import { Box, Divider, Typography } from "@mui/material";

const FooterPart = ({ activeButton }: { activeButton: any }) => {
  return (
    <>
      <footer className="py-16 bg-slate-500 text-center text-4xl text-white">
        footer container
      </footer>
      <section
        className={`h-[calc(100vh-7rem)] sm:h-[calc(100vh-5rem)] overflow-auto fixed w-full bottom-0 
          ${activeButton ? "visible" : "invisible"} 
          ${
            activeButton
              ? "transform translate-y-0"
              : "transform translate-y-full"
          }
          transition-all duration-250 ease-cubic-bezier-065-005-036-1 bg-red-200`}
      >
        <BottomSlider />
      </section>
    </>
  );
};

export default FooterPart;
