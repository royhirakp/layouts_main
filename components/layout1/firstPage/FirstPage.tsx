"use client";
import React, { useEffect, useState } from "react";
import PageHeader from "./parts/Header/PageHeader";
import FooterPart from "./parts/Footer/FooterPart";
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["vietnamese"] });

const FirstPage = ({ children }: { children: React.ReactNode }) => {
  const [activeButton, setActiveButton] = useState(false);
  const [scrollStartStatus, setScrollStartStatus] = useState<Boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollStartStatus(true);
      } else {
        setScrollStartStatus(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div
      // className={inter.className}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className={`${
          !scrollStartStatus ? "bg-slate-500" : "bg-black"
        } w-full fixed top-0 z-20`}
      >
        <PageHeader
          activeButton={activeButton}
          setActiveButton={setActiveButton}
        />
      </div>

      <main
        className={`transition-all ease-in-out duration-500 mt-28 sm:mt-20 flex-1
     `}
      >
        {children}
      </main>
      <FooterPart activeButton={activeButton} />
    </div>
  );
};

export default FirstPage;
