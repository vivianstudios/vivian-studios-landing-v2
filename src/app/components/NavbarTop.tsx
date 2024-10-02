"use client";
import React from "react";
import logo from "@/app/assets/logo-vivian.png";
import burgerMenu from "@/app/assets/burger-menu.png";
import closeButton from "@/app/assets/close.png";
import Image from "next/image";
import useCollapsibleMenu from "../hooks/collapsibleMenu";
import { usePathname } from "next/navigation";
import ScrollToTop from "react-scroll-to-top";
import arrow from "@/app/assets/up-arrow.svg";

type NavbarTopProps = {};

const Button: React.FC<NavbarTopProps> = () => {
  return <>Arrow</>;
};

const NavbarTop: React.FC<NavbarTopProps> = () => {
  const { open, setOpen }: any = useCollapsibleMenu();
  const pathname = usePathname();

  return (
    <div
      className={`flex justify-between ${open ? "sticky bg-black" : ""}  ${
        pathname.includes("services") ? "absolute z-40" : "bg-black z-10"
      } w-screen items-center top-0 `}
    >
      <ScrollToTop color="black" smooth />
      <div>
        <Image
          src={logo}
          alt="logo"
          className="w-[15vw] mt-3 ml-3 sm:w-[5vw] sm:ml-10 sm:mt-10"
        />
      </div>
      <div className="flex sm:w-[10vw] justify-evenly h-full items-center sm:mt-10 sm:mr-10">
        <div className="font-Averta text-white mr-5">showreel</div>

        {open ? (
          <Image
            src={closeButton}
            alt="close-button"
            className="size-7 mr-5"
            onClick={setOpen}
          ></Image>
        ) : (
          <Image
            src={burgerMenu}
            alt="burger-menu"
            className="size-7 mr-5"
            onClick={setOpen}
          ></Image>
        )}
      </div>
    </div>
  );
};
export default NavbarTop;
