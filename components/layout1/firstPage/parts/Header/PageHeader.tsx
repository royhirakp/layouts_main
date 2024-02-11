"use client";
import React, { useEffect, useState } from "react";
// import MainContainer from "../../../container/MainContainer";
import Image from "next/image";
import MainContainer from "../Container/MainContainer";
import Link from "next/link";
import { useRouter } from "next/router";
const PageHeader = ({
  setActiveButton,
  activeButton,
}: {
  setActiveButton: any;
  activeButton: any;
}) => {
  return (
    <MainContainer>
      <header className="py-3 h-28 sm:h-20 flex flex-col sm:flex-row">
        <div className="flex justify-between items-center w-full">
          <div
            className={`cursor-pointer w-28 sm:w-36 h-5 sm:h-6 transition-all duration-500 ${
              activeButton ? "opacity-0" : "opacity-100"
            }`}
          >
            <Link href="/layout1">
              <Image
                width={100}
                height={100}
                src="https://cdn.vocab.com/images/header/logo-1wobq9i.png"
                alt="logo"
              />
            </Link>
          </div>
          {/* page navigation for big device  */}

          <nav
            className={`hidden sm:block grow transition-all ease-in-out duration-500 ${
              activeButton ? "opacity-0" : "opacity-100"
            }`}
          >
            <PageNavigation />
          </nav>

          <div className="">
            <ProfileNavigation
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
          </div>
        </div>
        {/* page navigation for mobile */}
        <nav
          className={`block sm:hidden grow transition-all ease-in-out duration-500 mt-2 ${
            activeButton ? "hidden" : "block"
          } `}
        >
          <PageNavigation />
        </nav>
      </header>
    </MainContainer>
  );
};

export default PageHeader;

const ProfileNavigation = ({
  setActiveButton,
  activeButton,
}: {
  setActiveButton: any;
  activeButton: any;
}) => {
  return (
    <div
      className="flex items-center gap-[10px] cursor-pointer"
      // style={{
      //   display: "flex",
      //   alignItems: "center",
      //   gap: 10,
      // }}
      onClick={() => {
        setActiveButton(!activeButton);
      }}
    >
      <p className="text-xs sm:text-sm text-yellow-50 h-full">Hirak</p>
      <div
        className={`border-4 border-white rounded-full 
         transition-all duration-500 relative z-30 ${
           activeButton
             ? "w-20 sm:w-28 h-20 sm:h-28 top-8 sm:top-10"
             : "w-14 sm:w-16 h-14 sm:h-16 top-0"
         }
         `}
      >
        <Image
          src="/profilepic.png"
          alt="profile image "
          width={100}
          height={100}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
          }}
        />
      </div>

      <div className="w-4 sm:w-5  transition-all duration-500">
        <Image
          alt="menuIcon"
          className="transition-all duration-500"
          src={`/${
            !activeButton
              ? "menu-svgrepo-com.svg"
              : "closeIconMenu-Header-profile.svg"
          }`}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

const PageNavigation = () => {
  const router = useRouter();
  return (
    <ul
      className="flex justify-around px-4"
      style={{
        maxWidth: "30rem",
        margin: "auto",
      }}
    >
      {[
        {
          path: "/layout1/learn",
          icon: "https://cdn.vocab.com/images/header/learn-icon-on-1d3262d.svg",
          title: "Learn",
        },
        {
          path: "/layout1/dictionary",
          icon: "https://cdn.vocab.com/images/header/dict-icon-on-o5sd9g.svg",
          title: "Dictionary",
        },
        {
          path: "/layout1/vocabulary",
          icon: "https://cdn.vocab.com/images/header/lists-icon-on-b3ysls.svg",
          title: "Vocabulary",
        },
      ].map((item, i) => {
        return (
          <li key={i} style={{}}>
            <Link
              href={item.path}
              className={` ${
                router.pathname == item.path
                  ? "layout1HeaderNavLinkActive"
                  : "layout1HeaderNavLink"
              } flex gap-1 relative transition-all-500`}
            >
              <div className="w-4 sm:w-4 md:w-5">
                <Image width={100} height={100} src={item.icon} alt="" />
              </div>
              <span
                style={{}}
                className={`text-xs text-white sm:text-sm md:text-base ml-2 `}
              >
                {item.title}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
