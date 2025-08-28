"use client";
import React, { useEffect, useRef, useState } from "react";
import useCallToActionDistance from "../hooks/callToActionDistance";
import useDetectScroll from "@smakss/react-scroll-direction";
import useActiveImage from "../hooks/activeImage";
import LogoReveal from "./LogoReveal";
import { dictionary } from "../utils/imageDictionary";
import Image from "next/image";
type CallToActionProps = {};

const CallToAction: React.FC<CallToActionProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  let [yAxisPosition, setYAxisPosition] = useState<number>(0);
  const [viewDimension, setViewDimension] = useState<any>({
    height: 0,
    width: 0,
  });

  const setCallToActionDistance = useCallToActionDistance(
    (state: any) => state.setCallToActionDistance
  );

  const { maxQuantity, activeImage }: any = useActiveImage();

  function handleScroll() {
    const top = ref?.current?.getBoundingClientRect();
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      setViewDimension({
        width: window.screen.width,
        height: window.screen.height,
      });
    }
    return () => {};
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        if (ref.current) {
          window.removeEventListener("scroll", handleScroll, true);
        }
      };
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (yAxisPosition >= 1520) {
        setYAxisPosition(1);
      } else {
        setYAxisPosition((prev) => prev + 1);
      }
    }, 5);
  }, [yAxisPosition]);

  return (
    <div className="relative">
      <div className="h-[25vw] sm:h-[50vh] w-screen  absolute z-30 bg-gradient-to-b from-black text-black">
        |
      </div>
      <div className="h-[25vw] sm:h-[50vh] w-screen bottom-0 absolute z-30 bg-gradient-to-t from-black text-black">
        |
      </div>
      <div></div>
      <div className=" h-screen w-screen text-white  bg-black relative flex flex-col items-center justify-center">
        <div className=" h-[100%] w-[100%] flex justify-center items-center flex-col">
          <p className="font-averta text-3xl sm:text-7xl font-extrabold mb-[5vh] text-center text-white">
            Ready to elevate your project?
          </p>
          <p className="font-averta text-3xl sm:text-7xl font-extrabold text-center">
            Contact Us Today
          </p>
          <a
            href="/contact-us"
            className="sm:w-[20vw] w-[80vw] h-[7vh] z-40 flex justify-center items-center bg-black font-extrabold text-center text-white border-white border-2 rounded font-averta text-lg mt-[10vh] "
          >
            Get Custom Quote
          </a>
        </div>

        <div className="flex w-[90%] justify-between text-slate-300 opacity-70">
          <div
            style={{ transform: `translate(0,-${yAxisPosition * 0.5}px)` }}
            className="z-0 text-slate-400"
          >
            Namaste
          </div>
          <div
            style={{ transform: `translate(0,-${yAxisPosition * 0.4}px)` }}
            className="z-0"
          >
            Assalam
          </div>
          <div
            style={{ transform: `translate(0,-${yAxisPosition * 0.6}px)` }}
            className="z-0"
          >
            Bonjour
          </div>
          <div
            style={{ transform: `translate(0,-${yAxisPosition * 0.5}px)` }}
            className="z-0 hidden sm:block"
          >
            Hola
          </div>

          <div
            style={{ transform: `translate(0,-${yAxisPosition * 0.5}px)` }}
            className="z-0"
          >
            Namaste
          </div>
        </div>
      </div>
    </div>
  );
};
export default CallToAction;
