"use client";
import React, { useEffect, useState } from "react";
// import MainContainer from "../../../container/MainContainer";
import FirstPart from "./parts/FirstPart";
import SecondPart from "./parts/SecondPart";
import ThirdPart from "./parts/ThirdPart";
import MainContainer from "../Container/MainContainer";
let data = [
  { title: "link1" },
  { title: "link2" },
  { title: "link3" },
  { title: "link4" },
  { title: "link5" },
  { title: "link6" },
  { title: "link7" },
  { title: "link8" },
  { title: "link9" },
  { title: "link10" },
];
const PageContent = () => {
  return (
    <MainContainer>
      {/* <MiniNavbar /> */}
      <FirstPart />
      <SecondPart />
      <ThirdPart />
    </MainContainer>
  );
};

export default PageContent;

const MiniNavbar = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const updateScreenSize = () => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  const sliceDataBasedOnScreenSize = () => {
    const itemsPerRow = screenSize.width > 600 ? 3 : 1; // Adjust this condition based on your needs
    const startIndex = 0;
    const endIndex = startIndex + itemsPerRow;

    console.log(
      "screenSize.width==",
      screenSize.width,
      "screenSize===",
      screenSize,
      data.slice(startIndex, endIndex)
    );
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      updateScreenSize();
    });

    let ListOfLinks = [];

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);
  useEffect(() => {
    sliceDataBasedOnScreenSize();
  }, [screenSize]);

  return (
    <div>
      <nav className="flex">
        <ul
          style={{
            flexShrink: 1,
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            gap: "5px",
            rowGap: "5px",
            overflow: "hidden",
            justifyContent: "flex-start",
            listStyle: "none",
          }}
          // className="flex gap-6 overflow-hidden border-2"
        >
          {[
            { title: "link1" },
            { title: "link2" },
            { title: "link3" },
            { title: "link4" },
            { title: "link5" },
            { title: "link6" },
            { title: "link7" },
            { title: "link8" },
            { title: "link9" },
            { title: "link10" },
          ].map((item, i) => {
            return (
              <li key={i}>
                <a href="/" key={i}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <ul>
          {[
            { title: "link1" },
            { title: "link2" },
            { title: "link3" },
            { title: "link4" },
          ].map((item, i) => {
            return (
              <li key={i}>
                <a href="/">{item.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

/*
make a react component that will show a nav bar. the nav bar has 15 links in a row and a button named "others"

but when the screen side reduce the then the links in the navbar will heide one by one as per the screen size . and the hided links will appere in the dropdown that dropdown will open when the "others" button click


*/
