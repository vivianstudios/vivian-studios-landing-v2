"use client";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import logo from "../assets/logo-vivian.png";
import ScrollToTop from "react-scroll-to-top";
// import { animateScroll as scroll } from "react-scroll";

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      {/* <ScrollToTop smooth component={<p style={{ color: "white" }}>UP</p>} /> */}
      <div className="w-[100vw] sm:h-screen bg-black text-white flex flex-col items-center justify-between z-30 ">
        <div className="flex justify-between items-center w-[90%]">
          <div className="font-averta text-3xl sm:text-5xl mt-[5vh] mb-[5vh] ml-[2vw] mr-[2vw]">
            {" "}
            Why be shy Say hi.
          </div>
          <div className="sm:m-[10vh]">
            <Image
              src={logo}
              className="w-[20vw] sm:w-[15vw]"
              alt="logo"
            ></Image>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-[90%] text-base">
          <div className="mt-[5vh] mb-[5vh] sm:ml-[2vw] mr-[2vw]">
            <div className="mb-[3vh]">
              <p className="font-averta sm:text-lg">mail us</p>
              <a className="font-averta sm:text-lg font-bold" href="">
                contact@vivianstudios.com
              </a>
            </div>
            <div>
              <p className="font-averta sm:text-lg">even better call us</p>
              <a className="font-averta sm:text-lg font-bold" href="">
                +8801303542117 | +1 (213) 659-9799
              </a>
            </div>
          </div>
          <div className="sm:m-[10vh] w-full sm:w-[40%] mb-[3vh] sm:mb-[0vh]">
            <div className="font-averta sm:text-lg mb-[3vh]">
              lets be friends
            </div>
            <div className="w-full flex text-base sm:flex-row justify-between">
              <div className="">
                <div className="mb-[3vh]">
                  <a
                    className="font-averta text-center text-base sm:text-lg font-bold"
                    href="https://www.facebook.com/officialvivianstudios"
                  >
                    Facebook
                  </a>
                </div>
                <div>
                  <a
                    className="font-averta text-base sm:text-lg font-bold"
                    href="https://www.instagram.com/vivian.studios/"
                  >
                    Instagram
                  </a>
                </div>
              </div>
              <div className="">
                <div className="mb-[3vh]">
                  <a
                    className="font-averta text-base sm:text-lg font-bold"
                    href="https://www.youtube.com/channel/UC8PqF-MmQsQ9aoByfhyzZJg"
                  >
                    Youtube{" "}
                  </a>
                </div>
                <div>
                  <a
                    className="font-averta text-base sm:text-lg font-bold"
                    href=""
                  >
                    Pinterest{" "}
                  </a>
                </div>
              </div>
              <div className="">
                <div className="mb-[3vh]">
                  <a
                    className="font-averta text-base sm:text-lg font-bold"
                    href=""
                  >
                    Twitter
                  </a>
                </div>
                <div>
                  <a
                    className="font-averta text-base sm:text-lg font-bold"
                    href="https://www.linkedin.com/company/officialvivianstudios"
                  >
                    Linkedin
                  </a>
                </div>
              </div>
              {/* <div className="">
                <div className="mb-[3vh]">
                  <a
                    className="font-averta text-base sm:text-lg font-bold"
                    href="https://twitter.com/vivian_studios"
                  >
                    Behance
                  </a>
                </div>
                <div>
                  <a
                    className="font-averta text-base sm:text-lg font-bold"
                    href=""
                  >
                    Dribble
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center w-[90%] ">
          <div className="">
            <p className="font-averta text-lg">location</p>
            <a className="font-averta text-lg font-bold" href="">
              Los Angeles - California | Dhaka - Bangladesh
            </a>
          </div>
          <div className="">
            <p className="font-averta text-lg hidden sm:inline">
              2024 Vivian Studios All Rights Reserved
            </p>
          </div>
          <div className="">
            <p className="font-averta text-lg">best time to call us</p>
            <a className="font-averta text-lg font-bold" href="">
              10:00AM
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center border-t-white border-[0.5px] text-center w-[100vw] h-[4vh] sm:hidden text-base font-averta bg-black">
          {" "}
          2024 Vivian Studios All Rights Reserved
        </div>
      </div>
      {/* <ScrollToTop smooth component={<p style={{ color: "blue" }}>UP</p>} /> */}
    </>
  );
};
export default Footer;
