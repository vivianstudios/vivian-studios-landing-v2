"use client";
import React, { ReactNode, useImperativeHandle, useRef } from "react";

type HeroBannerProps = {
  children: ReactNode;
};

interface Props {
  children: ReactNode;
}
const HeroBanner = React.forwardRef<HTMLDivElement | null, Props>(
  (props, outerRef) => {
    const innerRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(outerRef, () => innerRef.current!, []);

    return (
      <div
        ref={innerRef}
        className="flex max-w-screen items-center h-[90vh] justify-center flex-col bg-black  z-0"
      >
        <div className="hidden sm:grid sm:grid-cols-2 w-[70vw]">
          <div className="transition ease-in-out delay-650 flex text-[7.25vw] font-averta items-center text-white leading-12 animate-slidein opacity-0">
            <p></p>
            SHAPE
            <div className="flex item rounded-[320px] w-[12vw] h-fit overflow-hidden justify-center">
              <video className="w-[12vw] text-black" autoPlay={true} muted loop>
                <source src="./reel.mp4" type="video/mp4" className="" />
              </video>
            </div>
          </div>

          <div className="flex text-[1.2vw] font-averta text-white justify-content m-2 items-center leading-12 animate-slidein opacity-0">
            <p>
              We transform businesses into unforgettable brands. As a TPN
              certified post production agency, we are dedicated to helping you
              stand out in the digital landscape.
            </p>
          </div>
          <div className="text-[7vw] font-averta text-white leading-9 animate-slidein opacity-0">
            CINEMATIC
          </div>
          <div className="flex justify-end text-[7vw] font-averta text-slate-500 leading-9 animate-slidein opacity-0">
            <p>DREAMS</p>
          </div>
        </div>
        <div className="grid sm:hidden grid-cols-1 w-[75vw] ">
          <div className="transition ease-in-out delay-650 text-[3rem] font-averta  text-white leading-20">
            <div className="flex rounded-[320px] w-[70vw] h-fit overflow-hidden">
              <video className="w-[70vw] text-black" autoPlay={true} muted loop>
                <source src="./reel.mp4" type="video/mp4" className="" />
              </video>
            </div>
            <p className="animate-slidein opacity-0">SHAPE</p>
          </div>
          <div className=" font-averta text-white justify-content items-center leading-12">
            <div className="text-[3rem] font-averta text-white leading-9 animate-slidein opacity-0">
              CINEMATIC
            </div>
            <div className=" text-[3rem] font-averta text-slate-500 leading-12">
              <p className="animate-slidein opacity-0">DREAMS</p>
            </div>
            <p className="animate-slidein opacity-0">
              We turn Business into Brands. We craft custom tailored websites
              and mobile apps that help you tell your story the right way.
              Awards winning digital agency based in India.
            </p>
          </div>
        </div>
        {props.children}
      </div>
    );
  }
);
HeroBanner.displayName = "Hero Banner";
export default HeroBanner;
