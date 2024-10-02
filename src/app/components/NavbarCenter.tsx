"use client";
import Link from "next/link";
import React, { useState } from "react";
type NavbarCenterProps = {};

interface menuItem {
  name: string;
  label: string;
}
const menuItems: menuItem[] = [
  {
    name: "animation",
    label: "Animation",
  },
  {
    name: "vfx",
    label: "VFX",
  },
  {
    name: "ar-vr",
    label: "AR/VR",
  },
  {
    name: "video-and-motion-graphics",
    label: "Video Editing",
  },
  {
    name: "image-post-production",
    label: "Image Post Production",
  },
];
const NavbarCenter: React.FC<NavbarCenterProps> = () => {
  const [hover, setHover] = useState<boolean>(false);
  const [focusedItem, setFocusedItem] = useState<menuItem>({
    name: "",
    label: "",
  });

  return (
    <div className="hidden sm:flex w-[99vw] items-center h-[20vh] mt-[10vh] relative justify-center">
      <div
        className={`${
          hover
            ? "translate-y-0 opacity-50 z-10"
            : "translate-y-full opacity-0 z-0"
        } transition duration-1000 flex font-averta justify-center w-full text-[7.35vw] text-black`}
      >
        <span className="font-flanel">{focusedItem.label[0]}</span>{" "}
        {focusedItem.label.slice(1)}
      </div>
      <div
        className={`w-[70vw] flex justify-between ${
          hover ? "text-black" : "text-white"
        }  font-averta text-2xl z-20 absolute transition-[color] duration-1000 `}
      >
        {" "}
        {menuItems.map((menuItem) => {
          return (
            <div key={menuItem.name}>
              <Link
                href={`./services/${menuItem.name}`}
                onMouseEnter={() => {
                  setHover(true);
                  setFocusedItem(menuItem);
                }}
                onMouseOut={() => {
                  setHover(false);
                }}
              >
                {menuItem.label}
              </Link>
            </div>
          );
        })}
      </div>

      <div
        className={` 
         ${hover ? "h-[20vh]" : "h-0"}
        bg-slate-400 w-full z-0 absolute transition-[height] duration-1000 
           `}
      ></div>
    </div>
  );
};
export default NavbarCenter;
