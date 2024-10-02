"use client";
import React from "react";
import ReactCompareImage from "react-compare-image";

import { Suspense, useRef } from "react";

import before from "@/app/assets/video-editing/Before03.jpg";
import after from "@/app/assets/video-editing/after1.jpg";
import CallToAction from "@/app/components/CallToAction";
import Slider from "@/app/components/Services/Slider";

type pageProps = {};

const Page: React.FC<pageProps> = () => {
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <Slider></Slider>
      </Suspense>
      <div className="flex w-screen bg-black flex-col items-center">
        <div className="w-screen h-screen bg-black flex sm:flex-row flex-col p-[14%] text-white">
          <div className="w-full sm:w-[40%] sm:text-8xl text-4xl font-averta font-extrabold">
            Video Editing
          </div>
          <div className="w-full sm:w-[60%] flex items-end text-2xl sm:text-4xl font-averta">
            Our agency specializes in editing videos for content creators,
            brands, and advertising agencies, transforming raw footage into
            captivating narratives. We ensure each video is visually engaging
            and polished, making it ready for any platform, be it a promotional
            ad, YouTube vlog, or corporate presentation.
          </div>
        </div>
        <div className="w-screen h-screen bg-black flex sm:flex-row flex-col p-[14%] text-white">
          <div className="w-full sm:w-[40%] sm:text-8xl text-4xl font-averta font-extrabold">
            Motion Graphics
          </div>
          <div className="w-full sm:w-[60%] flex items-end text-2xl sm:text-4xl font-averta">
            Motion graphics enhance content engagement and visual appeal through
            animated logos, kinetic typography, and detailed infographics. Our
            skilled designers transform static visuals into dynamic pieces that
            effectively convey intricate narratives and information.
          </div>
        </div>

        <div className="flex justify-center w-full sm:w-[60vw] items-center bg-black">
          <ReactCompareImage leftImage={before.src} rightImage={after.src} />
        </div>

        <div className="w-screen flex justify-center mt-[3vh] sm:mt-[10vh]">
          <div className="flex flex-col w-full sm:w-1/2 text-white justify-center items-center pl-[5vw]">
            <h1 className="font-averta font-bold text-3xl w-3/4 mb-[5vh]">
              Thumbnails{" "}
            </h1>
            <h3 className="font-averta font-bold text-lg w-3/4 mb-[5vh]">
              Our thumbnail creation service empowers content creators and ad
              agencies to enhance video click-through rates. By employing
              eye-catching visuals, bold typography, and strategic design, we
              produce thumbnails that effectively capture audience attention in
              a saturated market.
            </h3>
          </div>
        </div>

        <CallToAction />
      </div>
    </>
  );
};
export default Page;
