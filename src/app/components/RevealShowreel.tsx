"use client";
import React, { useEffect, useRef, useState } from "react";
import useRevealShowreelBottom from "../hooks/revealShowreelBottom";
import Image from "next/image";
import Lottie from "react-lottie";
import revealShowreelImage from "@/app/assets/home/reveal-showreel-thumbnail.jpg";
import * as playLottie from "@/app/assets/home/play-lottie.json";
import * as playLottieMobile from "@/app/assets/home/play-lottie-mobile.json";
type RevealShowreelProps = {};

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: playLottie,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const mobileOptions = {
  loop: true,
  autoplay: true,
  animationData: playLottieMobile,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const RevealShowreel: React.FC<RevealShowreelProps> = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [showreelVisible, setshowreelVisible] = useState<boolean>(false);

  const setRevealShowreelBottom = useRevealShowreelBottom(
    (state: any) => state.setRevealShowreelBottom
  );

  function handleScroll() {
    const revealShowreel = ref?.current?.getBoundingClientRect();
    setRevealShowreelBottom(revealShowreel?.bottom);
  }

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

  return (
    <div className={`cursor-play flex flex-col justify-center`}>
      <video
        className={`absolute w-screen ${
          showreelVisible ? "block opacity-100" : "hidden opacity-0"
        } text-black transition-opacity z-20 cursor-play `}
        autoPlay={true}
        muted
        loop
      >
        <source
          src="https://res.cloudinary.com/dsuiwxwkg/video/upload/v1725203577/Reveal-Showreel_esnole.mp4"
          type="video/mp4"
          className=""
        />
      </video>
      <div
        onClick={() => {
          setshowreelVisible(true);
        }}
        ref={ref}
        className={` w-screen h-fit sm:h-screen bg-black cursor-play`}
      >
        <div className="hidden sm:flex h-full  justify-center items-start">
          <div className="w-[50vw] h-full flex flex-col justify-center items-start">
            <p className="text-white text-[4rem] ml-[0.5rem] sm:text-[7rem] sm:ml-[4rem]">
              REVEAL
            </p>
            <p className="text-white text-[4rem] ml-[0.5rem] sm:text-[7rem] sm:ml-[4rem]">
              SHOWREEL
            </p>
          </div>
          <div className="w-[50vw] h-full flex justify-center items-center">
            <Lottie options={defaultOptions} height={600} width={600} />
          </div>
        </div>
        <div className="sm:hidden block z-10 cursor-play relative">
          <div className="absolute h-full w-full flex justify-center top-[25vh]">
            <Lottie options={mobileOptions} height={170} width={170} />
          </div>
          <Image
            src={revealShowreelImage}
            className={`w-screen h-auto ${showreelVisible ? "blur-sm" : ""}`}
            alt="showreel"
          ></Image>
        </div>
      </div>
    </div>
  );
};
export default RevealShowreel;
